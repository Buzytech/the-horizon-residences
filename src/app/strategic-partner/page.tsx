"use client";

import React, { useEffect, useState } from "react";
import styles from "./strategic-partner.module.css";
import {
  getAdvancerfromData,
  postFormDataFoxSuit,
} from "@/services/ApiService";
import toast from "react-hot-toast";
import CustomeToast from "@/common/tost";
import { useRouter } from "next/navigation";

interface FormField {
  _id: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

const StrategicPartnerPage = () => {
  const router = useRouter();
  const [fromInputDynamic, setFromInputDynamic] = useState<FormField[]>([]);
  const [formValues, setFormValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAdvancerfromData();
        setFromInputDynamic(res?.data[0].formFields as FormField[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (label: string, value: any) => {
    let updatedValue = value;
    if (label.toLowerCase().includes("email")) {
      updatedValue = value.trim();
    }

    if (
      label.toLowerCase().includes("contact") ||
      label.toLowerCase().includes("mobile") ||
      label.toLowerCase().includes("phone")
    ) {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormValues((prev: any) => ({
      ...prev,
      [label]: updatedValue,
    }));

    if (errors[label]) {
      setErrors((prev: any) => ({
        ...prev,
        [label]: false,
      }));
    }
  };

  const handleCheckbox = (label: string, option: string) => {
    setFormValues((prev: any) => {
      let updated = { ...prev };
      let current = prev[label] || [];

      if (label === "Expertised in:") {
        if (option === "Both") {
          updated[label] = ["Residential", "Commercial", "Both"];
          return updated;
        }
        const other = option === "Residential" ? "Commercial" : "Residential";
        const isChecked = current.includes(option);

        if (isChecked) {
          updated[label] = current.filter((v: string) => v !== option);
        } else {
          updated[label] = [option];
        }
        updated[label] = updated[label].filter((v: string) => v !== "Both");
        return updated;
      }
      const list = prev[label] || [];
      return list.includes(option)
        ? { ...prev, [label]: list.filter((x: string) => x !== option) }
        : { ...prev, [label]: [...list, option] };
    });

    if (errors[label]) {
      setErrors((prev: any) => ({
        ...prev,
        [label]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;

    fromInputDynamic.forEach((field) => {
      if (field.required) {
        const value = formValues[field.label];

        if (field.type === "checkbox") {
          if (!value || value.length === 0) {
            newErrors[field.label] = true;
            isValid = false;
          }
        } else {
          if (!value || value.trim() === "") {
            newErrors[field.label] = true;
            isValid = false;
          }
        }
      }

      // Email validation
      if (field.label.toLowerCase().includes("email")) {
        const emailValue = formValues[field.label];
        if (emailValue) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailValue)) {
            newErrors[field.label] = "Please enter a valid email address";
            isValid = false;
          }
        }
      }

      // Mobile number validation - must be exactly 10 digits
      if (field.label === "Mobile No.") {
        const mobile = formValues[field.label];
        if (mobile && mobile.length < 10) {
          newErrors[field.label] = "Mobile number must be 10 digits";
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    const payload = {
      customerId: "693a7de66a1489a0d2970554",
      formId: "693ac061ed711e673fd670ae",
      formType: "advance from",
      fields: formValues,
    };

    try {
      const res = await postFormDataFoxSuit(payload);
      console.log("API Success:", res);
      setFormValues({});
      setErrors({});
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input: any) => {
        if (input.type === "checkbox") {
          input.checked = false;
        } else {
          input.value = "";
        }
      });
      router.push("/strategic-partner/partner-thank-you");
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className={styles.row}>
        <div className={styles.leftImage}>
          <img src="assets/images/banner/frombanner.webp" alt="" />
        </div>
        <div className={styles.rightForm}>
          <div className={styles.logoBox}>
            <img
              src="/assets/images/icons/partnerlogo.png"
              alt="Horizon Residences"
            />
          </div>

          <div className={styles.headerBar}>
            Strategic Partner Empanelment Form
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formContent}>
              <h3 className={styles.formTitle}>Personal Information</h3>

              {fromInputDynamic?.map((field) => (
                <div key={field._id} className={styles.field}>
                  <label>
                    {field.label}{" "}
                    {field.required && <span style={{ color: "red" }}>*</span>}
                  </label>

                  {field.label === "Mobile No." && (
                    <>
                      <div className={styles.phoneWrapper}>
                        <span className={styles.phonePrefix}>+91</span>
                        <input
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          className={styles.phoneInput}
                          required={field.required}
                          maxLength={10}
                          onChange={(e) => {
                            const onlyNumbers = e.target.value.replace(
                              /\D/g,
                              ""
                            );
                            e.target.value = onlyNumbers;
                            handleChange(field.label, onlyNumbers);
                          }}
                        />
                      </div>
                      {errors[field.label] && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          {errors[field.label]}
                        </span>
                      )}
                    </>
                  )}

                  {field.type !== "checkbox" &&
                    field.label !== "Mobile No." && (
                      <>
                        <input
                          type={field.type === "phone" ? "digits" : field.type}
                          className={`${styles.dottedInput} ${
                            errors[field.label] ? styles.inputError : ""
                          }`}
                          required={field.required}
                          maxLength={
                            field.label === "RERA No." ? 25 : undefined
                          }
                          onChange={(e) =>
                            handleChange(field.label, e.target.value)
                          }
                        />
                        {errors[field.label] &&
                          typeof errors[field.label] === "string" && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {errors[field.label]}
                            </span>
                          )}
                      </>
                    )}

                  {/* CHECKBOX FIELDS */}
                  {field.type === "checkbox" && (
                    <div
                      className={`${styles.checkboxGroup} ${
                        errors[field.label] ? styles.checkboxError : ""
                      }`}
                    >
                      {field.options?.map((opt, idx) => (
                        <label key={idx}>
                          <input
                            type="checkbox"
                            checked={
                              formValues[field.label]?.includes(opt) || false
                            }
                            onChange={() => handleCheckbox(field.label, opt)}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className={styles.submitRow}>
                <button className={styles.submitBtn} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h4>ROSEBERRY DEVELOPERS (P) LTD</h4>
        <p>CIN: U45400DL2007PTC167361</p>

        <p>
          <strong>SITE ADDRESS:</strong> 10/2, AT 10 VAIBHAV KHAND, INDIRAPURAM,
          GHAZIABAD, UTTAR PRADESH, 201014
        </p>

        <p>
          <strong>REGISTERED ADDRESS:</strong> 2-A/3, S/F FRONT SIDE, KUNDAN
          MANSION ASAF ALI ROAD TURKMAN GATE, TURKMAN GATE, DARYA GANJ, CENTRAL
          DELHI, NEW DELHI, DELHI, INDIA, 110002
        </p>

        <p>
          <strong>CORPORATE ADDRESS:</strong> PLOT NO C01 SECTOR 12, ECOTECH III
          GREATER NOIDA, BISRAKH, GAUTAM BUDDHA NAGAR, BISRAKH, UTTAR PRADESH,
          INDIA, 201306
        </p>
      </div>
    </>
  );
};

export default StrategicPartnerPage;
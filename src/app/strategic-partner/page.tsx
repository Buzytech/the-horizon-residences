"use client";

import React, { useEffect, useState } from "react";
import styles from "./strategic-partner.module.css";
import {
  getAdvancerfromData,
  postFormDataFoxSuit,
} from "@/services/ApiService";
import toast from "react-hot-toast";
import CustomeToast from "@/common/tost";

interface FormField {
  _id: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

const StrategicPartnerPage = () => {
  const [fromInputDynamic, setFromInputDynamic] = useState<FormField[]>([]);
  console.log(fromInputDynamic, 'fromInputDynamic:::::::::::::');

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
    setFormValues((prev: any) => ({
      ...prev,
      [label]: value,
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
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
        // CustomeToast.info("Please fill all required fields !");
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

      CustomeToast.success("Form submitted successfully!");

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
                    <div className={styles.phoneWrapper}>
                      <span className={styles.phonePrefix}>+91</span>
                      <input
                        type="text"
                        className={styles.phoneInput}
                        required={field.required}
                        maxLength={10}
                        onChange={(e) => {
                          const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                          handleChange(field.label, onlyNumbers);
                        }}
                      />
                    </div>
                  )}

                  {/* ALL OTHER NON-CHECKBOX FIELDS */}
                  {field.type !== "checkbox" && field.label !== "Mobile No." && (
                    <input
                      type={field.type === "phone" ? "text" : field.type}
                      className={`${styles.dottedInput} ${
                        errors[field.label] ? styles.inputError : ""
                      }`}
                      required={field.required}
                      maxLength={
                        field.label === "RERA No."
                          ? 25
                          : undefined
                      }
                      onChange={(e) =>
                        handleChange(field.label, e.target.value)
                      }
                    />
                  )}

                  {/* CHECKBOX FIELDS */}
                  {field.type === "checkbox" && (
                    <div className={`${styles.checkboxGroup} ${
                      errors[field.label] ? styles.checkboxError : ""
                    }`}>
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
          MANSION ASAF ALI ROAD TURKMAN GATE, DARYA GANJ, CENTRAL DELHI, NEW
          DELHI, DELHI, INDIA, 110002
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
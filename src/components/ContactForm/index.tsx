"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ContactForm.module.css";
import { postFormData } from "@/services/ApiService";

interface FromProps {
  onOpenModal: () => void;
}


const ContactForm : React.FC<FromProps> = ({ onOpenModal }) => {
  const router = useRouter();

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    interest: false,
    phone: false,
    captcha: false,
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    const newErrors = {
      fullName: !fullName,
      email: !email || !validateEmail(email),
      interest: !interest,
      phone: !phone,
      captcha: parseInt(captchaInput) !== captcha.answer,
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((val) => val);
    if (hasError) return;

    const body = {
      firstName: fullName.split(" ")[0] || fullName,
      lastName: fullName.split(" ")[1] || "",
      email: email,
      mobilePhone: phoneCode + phone,
      comments: "",
      originFrom: "",
      product: interest,
      campaign: "",
      isUpdatefromUIDate: false,
      isImported: true,
      DumpdataObjectId: "0105202114465",
      tenantId: 914,
    };

    try {
      await postFormData(body);
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className={styles.mainSection}>
      <div className="horizonContainer">
        <div className={styles.flexWrapper}>
          <div>
            <img src="/assets/images/overlayBG/form_cover.png" alt="" />
            <div>
              <h4 className={styles.imagetitle}>
                Want to know more in detail?
              </h4>
              <button className={`btnPrimary ${styles.submitBtn}`} onClick={onOpenModal}>
                Download the brochure
              </button>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <h3 className={styles.titleTop}>Your Inquiry</h3>
            <h2 className={styles.titleMain}>OUR PRIORITY</h2>

            <div className={styles.inputGrid}>
              <input
                type="text"
                placeholder="Full name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={errors.fullName ? styles.inputError : ""}
              />

              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.fullName ? styles.inputError : ""}
              />

              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              >
                <option value="" disabled>
                  Select your interest *
                </option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="invest">Invest</option>
              </select>

              <div className={styles.phoneRow}>
                <select
                  className={styles.countrySelect}
                  value={phoneCode}
                  onChange={(e) => setPhoneCode(e.target.value)}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>

                <input
                  type="text"
                  className={styles.phoneInput}
                  placeholder="Mobile Number *"
                  value={phone}
                  maxLength={12}
                  onChange={(e) => {
                    const value = e.target.value;

                    // Allow only digits
                    if (/^\d*$/.test(value)) {
                      setPhone(value);
                    }
                  }}
                />
              </div>
            </div>
            <div className={styles.captchaRow} style={{ marginTop: "10px" }}>
              <div className={styles.captchaBox}>
                <strong>
                  {captcha.a} + {captcha.b} =
                </strong>
              </div>

              <input
                type="text"
                placeholder="Answer"
                className={styles.captchaInput}
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />

              <button
                type="button"
                className={styles.refreshBtn}
                onClick={() => {
                  setCaptcha(generateCaptcha());
                  setCaptchaInput("");
                  setError("");
                }}
              >
                🔄
              </button>
            </div>

            {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
            <div className={styles.checkRow}>
              <label>
                <input type="checkbox" /> I’ve read and agree to the privacy
                policy
              </label>
            </div>
            <button
              className={`btnPrimary ${styles.visitBtn}`}
              onClick={handleSubmit}
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const router = useRouter(); 

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (parseInt(captchaInput) !== captcha.answer) {
      setError("Incorrect answer. Please try again.");
      return;
    }

    setError("");
    router.push("/thank-you");
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
              <button className={`btnPrimary ${styles.submitBtn}`}>
                Download the brochure
              </button>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <h3 className={styles.titleTop}>Your Inquiry</h3>
            <h2 className={styles.titleMain}>OUR PRIORITY</h2>

            <div className={styles.inputGrid}>
              <input type="text" placeholder="Full name *" />
              <input type="email" placeholder="Email *" />
              <select defaultValue="">
                <option value="" disabled>
                  Select your interest *
                </option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="invest">Invest</option>
              </select>

              <div className={styles.phoneRow}>
                <select className={styles.countrySelect} defaultValue="+91">
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

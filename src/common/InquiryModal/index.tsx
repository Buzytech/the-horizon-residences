"use client";
import React, { useState } from "react";
import styles from "./InquiryModal.module.css";
import { RxCross2 } from "react-icons/rx";

const InquiryModal = ({ onClose }: { onClose: () => void }) => {
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
    alert("Success! Captcha matched.");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.left}>
          <img src="/assets/images/banner/about.jpg" alt="Horizon Residences" />
        </div>
        <div className={styles.right}>
          <button className={styles.closeBtn} onClick={onClose}>
            <RxCross2 />
          </button>
          <div className={styles.titles}>
            <h3 className={styles.titleTop}>Your Inquiry</h3>
            <h2 className={styles.titleMain}>OUR PRIORITY</h2>
          </div>

          <form className={styles.form}>
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

            <div className={styles.captchaRow}>
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

            <label className={styles.checkbox}>
              <input type="checkbox" required />
              I've read and agree to the privacy policy
            </label>

            <label className={styles.checkbox}>
              <input type="checkbox" />
              I'd like to hear about news and offers
            </label>

            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;

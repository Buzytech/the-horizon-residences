"use client";
import React, { useState } from "react";
import styles from "./InquiryModal.module.css";
import { RxCross2 } from "react-icons/rx";
import { postFormData } from "@/services/ApiService";
import { useRouter } from "next/navigation";

const InquiryModal = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();
    const newErrors = {
      fullName: !fullName,
      email: !email || !validateEmail(email),
      interest: !interest,
      phone: !phone || phone.length < 10,
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
       setLoading(true);
      await postFormData(body);
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
       setLoading(false);
    }
     finally {
    setLoading(false); 
  }
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

          <form className={styles.form} onSubmit={handleSubmit}>
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
                className={errors.email ? styles.inputError : ""}
              />

              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className={errors.interest ? styles.inputError : ""}
              >
                <option value="" disabled>
                  Select your interest *
                </option>
           <option value="4 BHK+UTILITY">4 BHK+UTILITY (INR 5.56* CRORE)</option>
                <option value="4.5 BHK+UTILITY">4.5 BHK+UTILITY (INR 6.31* CRORE)</option>
                <option value="5 BHK+UTILITY">5 BHK+UTILITY (INR 7.35* CRORE)</option>
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
                  placeholder="Mobile Number *"
                  value={phone}
                  maxLength={12}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) setPhone(value);
                  }}
                  className={errors.phone ? styles.inputError : ""}
                />
              </div>
            </div>

            <div className={styles.captchaRow}>
              <div className={styles.captchaBox}>
                  {captcha.a} + {captcha.b} =
              </div>

              <input
                type="text"
                placeholder="Answer"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
               className={styles.captchaInput}
              />

              <button
                type="button"
                className={styles.refreshBtn}
                onClick={() => {
                  setCaptcha(generateCaptcha());
                  setCaptchaInput("");
                  setErrors((prev) => ({ ...prev, captcha: false }));
                }}
              >
                🔄
              </button>
            </div>

            <label className={styles.checkbox}>
              <input type="checkbox" required />
              I've read and agree to the privacy policy
            </label>

            {/* <label className={styles.checkbox}>
              <input type="checkbox" />
              I'd like to hear about news and offers
            </label> */}

            <button type="submit" className={styles.submitBtn}>
              {loading ? <div className={styles.loader}></div> : "Schedule Site Visit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;

import React from 'react';
import styles from './privacy-policy.module.css';

const PrivacyPolicy = () => {
  return (
    <section className={styles.mainSection}>
        <div className="horizonContainer">
      <div className={styles.header}>
        <h1>Privacy Policy</h1>
      </div>

      <div className={styles.section}>
        <h2>1. GENERAL</h2>
        <p>a) This document is an electronic record in accordance with the Information Technology Act, 2000 and rules made thereunder. It does not require physical or digital signatures.</p>
        <p>b) This Privacy Policy ("Policy") is published in compliance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011. It governs the use and access of the website www.thehorizonresidences.com ("Website"), owned and operated by Harmony Infra Ventures Private Limited ("Company"), incorporated under the Companies Act, 2013.</p>
        <p>c) By accessing this Website, the user ("You", "User") agrees to be bound by this Policy. The terms "We", "Us", and "Our" refer to Harmony Infra Ventures Private Limited.</p>
        <p>d) This Policy applies to any person accessing or using the Website who is competent to enter into a binding contract under Indian law.</p>
        <p>e) Your continued use of the Website signifies your acceptance of this Policy and the Company’s Terms of Use.</p>
      </div>

      <div className={styles.section}>
        <h2>2. INFORMATION COLLECTION</h2>
        <p>a) We collect personal information such as your name, email address, contact number, and location when you fill out forms or request brochures.</p>
        <p>b) We may also collect non-personal information including your IP address, browser type, and browsing behavior.</p>
        <p>c) The data is used to provide you with relevant services, respond to inquiries, and improve user experience.</p>
        <p>d) We may retain and use the information for internal records, legal compliance, marketing, or analytics.</p>
      </div>

      <div className={styles.section}>
        <h2>3. COOKIES & TRACKING TECHNOLOGIES</h2>
        <p>a) We use cookies and third-party tracking tools like Google Analytics and Facebook Pixel to enhance your browsing experience.</p>
        <p>b) Cookies help us understand user preferences and improve Website performance. You may choose to disable cookies via your browser settings.</p>
      </div>

      <div className={styles.section}>
        <h2>4. USE OF INFORMATION</h2>
        <p>a) Your information may be used for:</p>
        <ul>
          <li>Sending promotional materials or updates</li>
          <li>Internal analytics and reporting</li>
          <li>Responding to inquiries or requests</li>
          <li>Retargeting ads through Facebook, Google, or other platforms</li>
          <li>Customizing user experience based on interaction</li>
        </ul>
        <p>b) We do not sell or lease your personal information to third parties for marketing.</p>
      </div>

      <div className={styles.section}>
        <h2>5. DATA SECURITY</h2>
        <p>a) We adopt industry-standard measures to protect your information. Although we strive to secure data, no method is 100% secure.</p>
        <p>b) All payment-related data, if collected, is handled by third-party gateways and not stored by us.</p>
      </div>

      <div className={styles.section}>
        <h2>6. THIRD-PARTY LINKS AND SERVICES</h2>
        <p>a) The Website may contain links to third-party websites. We are not responsible for the privacy practices of these sites.</p>
      </div>

      <div className={styles.section}>
        <h2>7. USER CONSENT</h2>
        <p>a) By using the Website, you consent to the collection, use, and sharing of your data as described in this Policy.</p>
      </div>

      <div className={`${styles.section} ${styles.grievance}`}>
        <h2>8. GRIEVANCE OFFICER</h2>
        <p>In accordance with the IT Act 2000 and related rules, the name and contact details of the Grievance Officer are as follows:</p>
        <p>Grievance Officer: Mr. [Name to be filled by client]</p>
        <p>Email: [Email to be filled by client]</p>
      </div>

      <div className={styles.section}>
        <h2>9. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Policy shall be governed by and interpreted in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Delhi NCR.</p>
      </div>

      <div className={styles.section}>
        <p>Harmony Infra Ventures Private Limited, led by Mr. Sailander Solanki and Mr. HS Kandhari, values your trust and is committed to safeguarding your personal data while offering ultra-luxury real estate experiences.</p>
      </div>
        </div>
    </section>
  );
};

export default PrivacyPolicy;

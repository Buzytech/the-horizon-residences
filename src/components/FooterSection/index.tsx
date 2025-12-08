import React from "react";
import styles from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className="horizonContainer">
        <div className={styles.topRow}>
          <div className={styles.centerLogos}>
            <img
              src="/assets/images/logo/the-horizonLogo.png"
              className={styles.horizonLogo}
              alt="Horizon Logo"
            />
            <div className={styles.verticalLine}></div>
            <img
              src="/assets/images/logo/harmonyLogo.png"
              className={styles.harmonyLogo}
              alt="Harmony Logo"
            />
          </div>
          <div className={styles.reraRight}>
            <p className={styles.reraText}>
              UP RERA Registration No.: UPRERAPRJ223953/09/2025 <br />
              Website of UP RERA: www.up-rera.in <br />
              Launch Date: 04th Oct, 2025 <br />
              Promoter: ROSEBERRY DEVELOPERS (P) LTD. <br />
              Collection A/C: RDPL COLL A/C THE HORIZON RESIDENCES <br />
              HDFC Bank | A/C No: 99991000000770 | IFSC: HDFC0000590 <br />
              Branch: G 2 & 3 Windsor Park, Indirapuram
            </p>

            <img
              src="/assets/images/logo/qr1.svg"
              className={styles.qr}
              alt="QR Code"
            />
          </div>
        </div>
        <div className={styles.addressBox}>
          Click below the address to Locate our Sales Lounge <br />
          <span>
            Plot No. 10/2, Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh
            201014
          </span>
        </div>

        <div className={styles.socialRow}>
          <img src="/assets/images/logo/linkdin.svg" alt="" />
          <img src="/assets/images/logo/youtube.svg" alt="" />
          <img src="/assets/images/logo/insta.svg" alt="" />
          <img src="/assets/images/logo/facebook.svg" alt="" />
        </div>
      </div>

      <div className={styles.privecypolicy}>
        <a href="/privacy-policy">Privacy Policy</a>
        <span> | </span>
        <a href="/terms">Terms & Conditions</a>
      </div>

      <div className={styles.centerTextBlock}>
        ROSEBERRY DEVELOPERS PRIVATE LIMITED (“Company”) is developing a
        residential group housing project The Horizon Residences (“Project”),
        situated at PLOT NO. 10/2 AT PLOT NO. 10, VAIBHAV KHAND, INDIRAPURAM
        which is registered with Uttar Pradesh Real Estate Regulatory Authority
        vide RERA Registration No. UPRERAPRJ223953/09/2025 dated 11th September
        2025 available at up-rera.in. The Project is being developed, pursuant
        to permit no. SM-10-Dec-2024:23309 dated 16/02/25 valid for 5 years
        granted by Uttar Pradesh Authority for the Project and any further
        revisions and renewals in future. The terms of allotment/sale shall be
        subject to (a) application form, allotment letter, agreement for sale
        and/or conveyance deed; (b) licenses, building plan and other approvals;
        and (c) occupation certificate(s). Building plan and approvals are
        subject to change and revision.
      </div>

      <div className={styles.bottomBar}>
        <span>
          Copyright 2025 © All Right Reserved Design by The Horizon Residence (ROSEBERRY DEVELOPERS PRIVATE LIMITED)
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;

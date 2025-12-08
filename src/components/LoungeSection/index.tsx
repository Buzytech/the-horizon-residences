import React from "react";
import styles from "./LoungeSection.module.css";

interface LocationProps {
  onOpenModal: () => void;
}

const LoungeSection: React.FC<LocationProps> = ({ onOpenModal }) => {
  return (
    <section className={styles.mainBannerSection}>
      <div className="horizonContainer">
        <div className={styles.bannerWrapper}>
          <img
            src="/assets/images/banner/lounge.png"
            alt="banner"
            className={styles.bannerImage}
          />

          <div className={styles.overlayContent}>
            <h2 className={styles.title}>Visit Our Sales Lounge</h2>

            <button onClick={onOpenModal} className={`btnPrimary ${styles.visitBtn}`}>Schedule Site Visit</button>
            <div className={styles.textClass}>Or</div>
            <div className={styles.phone}>+91 70652 12121</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoungeSection;

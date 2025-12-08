import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <section id="overview" className={styles.mainBannerSection}>
        <div className={`horizonContainer ${styles.bannerContainer}`}>
          <div className={styles.imageWrapper}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/assets/images/banner/mob1.jpg"
              />
              <img
                src="/assets/images/banner/web1.webp"
                alt="banner"
                className={styles.bannerImage}
              />
            </picture>
          </div>
        </div>
      </section>

      <div className={styles.fixedIcons}>
        <div className={styles.iconItem}>
          <img src="/assets/images/logo/phonicon.svg" alt="Call" />
          <span className={styles.iconLabel}>CALL NOW</span>
        </div>
        <div className={styles.iconItem}>
          <img src="/assets/images/logo/messageicon.svg" alt="Chat" />
          <span className={styles.iconLabel}>ENQUIRE</span>
        </div>
        <div className={styles.iconItem}>
          <img src="/assets/images/logo/whatsapicon.svg" alt="WhatsApp" />
          <span className={styles.iconLabel}>WHATSAPP</span>
        </div>
      </div>
    </>
  );
};

export default Banner;

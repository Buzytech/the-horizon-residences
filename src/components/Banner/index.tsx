import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section id="overview" className={styles.mainBannerSection}>
        <div className={`horizonContainer ${styles.bannerContainer}`}>
          <div className={styles.imageWrapperHorizon}>
            <Image
              src="/assets/images/banner/webBannerHorizon.webp"
              alt="banner"
              className={styles.bannerImage}
              fill
            />
            <Image
              src="/assets/images/banner/mobBannerHorizon.webp"
              alt="banner"
              className={styles.mobBannerImage}
              fill
            />
          </div>
        </div>
      </section>

      <div className={styles.fixedIcons}>
        <a href="tel:+917065212121" className={styles.iconItem}>
          <img src="/assets/images/logo/phonicon.svg" alt="Call" />
          <span className={styles.iconLabel}>CALL NOW</span>
        </a>

        <a
          href="mailto:your-email@example.com?subject=Enquiry"
          className={styles.iconItem}
        >
          <img src="/assets/images/logo/messageicon.svg" alt="Chat" />
          <span className={styles.iconLabel}>ENQUIRE</span>
        </a>

        <a
          href="https://wa.me/917065212121"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconItem}
        >
          <img src="/assets/images/logo/whatsapicon.svg" alt="WhatsApp" />
          <span className={styles.iconLabel}>WHATSAPP</span>
        </a>
      </div>
    </>
  );
};

export default Banner;

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

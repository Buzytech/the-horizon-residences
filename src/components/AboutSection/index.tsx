"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="aboutus" className={styles.mainBannerSection}>
      <div className="horizonContainer">

        <div className={styles.flexWrapper}>
          <motion.div
            className={styles.imageBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/assets/images/harmonyImg.jpg"
              alt="Harmony Infra Tower"
              className={styles.mainImage}
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </motion.div>
          <motion.div
            className={styles.contentBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >

            <motion.div
              className={styles.headingArea}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.aboutTitle}>About</h3>
              <h2 className={styles.heading}>HARMONY INFRA</h2>
            </motion.div>
            <motion.div
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Harmony Infra Ventures has established itself as a name of trust
              and innovation in North India’s real estate landscape. Renowned
              for quality, timely delivery, and architectural excellence, the
              company has earned recognition as the best real estate developer
              in Indirapuram, where it has delivered thoughtfully planned
              residential and commercial projects. With a strong and growing
              presence across the region, Harmony Infra Ventures has also built
              its reputation as one of the best real estate developers in Delhi NCR.
            </motion.div>
            <motion.div
              className={styles.statsBlock}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.statsHeading}>
                18 YEARS OF <span>LEGACY</span>
              </h3>
              <h3 className={styles.statsHeading}>
                <span>PRESENCE IN</span> 10 CITIES
              </h3>

              <div className={styles.iconGrid}>
                <div className={styles.iconItem}>
                  <img src="/assets/images/icons/residential.svg" alt="" />
                  <p>RESIDENTIAL</p>
                </div>

                <div className={styles.iconItem}>
                  <img src="/assets/images/icons/fmcg.svg" alt="" />
                  <p>EDUCATION</p>
                </div>

                <div className={styles.iconItem}>
                  <img src="/assets/images/icons/education.svg" alt="" />
                  <p>FMCG</p>
                </div>

                <div className={styles.iconItem}>
                  <img src="/assets/images/icons/hospital.svg" alt="" />
                  <p>F&B</p>
                </div>

                <div className={styles.iconItem}>
                  <img src="/assets/images/icons/cook.svg" alt="" />
                  <p>HOSPITAL</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.partners}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className={styles.fromText}>From the legacy of</p>

              <div className={styles.logoRow}>
                <img src="/assets/images/logo/cocacolalogo.svg" alt="CocaCola" />
                <img src="/assets/images/logo/genesislogo.svg" alt="Genesis" />
                <img src="/assets/images/logo/horizonlogo.svg" alt="Horizon" />
                <img src="/assets/images/logo/vgslogo.svg" alt="Harmony" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

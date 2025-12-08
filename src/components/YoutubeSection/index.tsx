"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./youtube.module.css";

const YoutubeSection = ({ onOpenModal }: any) => {
  const contentVariant: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className={styles.mainSection}>
      <div className="horizonContainer">
        <div className={styles.imageWrapper}>
          <img
            src="/assets/images/banner/bannerImg.webp"
            alt="banner"
            className={styles.bannerImage}
          />

          <motion.div
            className={styles.contentWrapper}
            variants={contentVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className={styles.textContent} variants={itemVariant}>
              <h2>The Virtual Tour</h2>
              <h3>
                LUXURY <span>has a</span>
                <br />
                <span>new</span> ADDRESS
              </h3>
            </motion.div>

            <motion.div
              className={styles.designedByBlock}
              variants={itemVariant}
            >
              <div className={styles.lineWrapper}>
                <span className={styles.line}></span>
                <p className={styles.designBy}>Design by</p>
                <span className={styles.line}></span>
              </div>

              <img
                src="/assets/images/logo/youtube_logo.svg"
                alt="ATWIN"
                className={styles.atwinLogo}
              />
            </motion.div>

            <motion.img
              variants={itemVariant}
              src="/assets/images/logo/play_button.png"
              alt="play"
              className={styles.playButton}
              whileHover={{ scale: 1.1 }}
            />

            <motion.button
              variants={itemVariant}
              className={`btnPrimary ${styles.visitBtn}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
            >
              Schedule Site Visit
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;

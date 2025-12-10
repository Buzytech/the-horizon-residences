import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./PlayVidioSection.module.css";
import YoutubeModal from "@/common/youtubeModel";
interface VidioSection {
  onOpenModal: () => void;
}

const PlayVidioSection : React.FC<VidioSection> = ({ onOpenModal }) => {
      const [modalOpenYoutube, setModalOpenYoutube] = useState(false);
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
    <>
    <section className={styles.mainSection}>
      <div className="horizonContainer">
        <div className={styles.imageWrapper}>
          <img
            src="/assets/images/banner/youtube2image.png"
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
            <div className={styles.topContent}>
              <motion.div className={styles.textContent} variants={itemVariant}>
                <h2>In the</h2>
                <h3>
                  HEART<span>of</span>
                  <br />
                  <span>INDIRAPURAM</span>
                </h3>
              </motion.div>

              <motion.img
                variants={itemVariant}
                src="/assets/images/logo/play_button.png"
                alt="play"
                className={styles.playButton}
                whileHover={{ scale: 1.1 }}
                  onClick={() => setModalOpenYoutube(true)}
              />
            </div>
          </motion.div>

          <div className={styles.bottomButton} onClick={onOpenModal}>
            <motion.button
              variants={itemVariant}
              className={`btnPrimary ${styles.visitBtn}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Site Visit
            </motion.button>
          </div>
        </div>
      </div>
    </section>
        {modalOpenYoutube && (
  <YoutubeModal
    open={modalOpenYoutube}
    onClose={() => setModalOpenYoutube(false)}
      videoId="zKLiOnSQpFk"
  />
)}
    </>
  );
};

export default PlayVidioSection;

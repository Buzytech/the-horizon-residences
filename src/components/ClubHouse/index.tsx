import React from "react";
import styles from "./ClubHouse.module.css";
import { motion } from "framer-motion";

const ClubHouse = () => {
  return (
    <section className={styles.mainSection}>
      <div className="horizonContainer">
        <motion.div
          className={styles.leftContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <h2 className={styles.heading}>
            The last you can ever behold,<br />
            The best in <span>Indirapuram</span>
          </h2>

          <div className={styles.logoBox}>
            <img
              src="/assets/images/logo/club_logo.svg"
              alt="Club Logo"
              className={styles.logoImg}
            />
          </div>

          <p className={styles.description}>
            The Club 264 offers a multi-floor sanctuary where opulence meets
            togetherness, creating a space beyond formality. The Club 264 spans
            across 626.76 Sq. Mt. (6,750 Sq. Ft. approx.)
          </p>

          <p className={styles.descriptionSmall}>
            From handshakes to heartfelt synergies, indulgent escapes and lively
            moments unfold in exquisite surroundings, offering both intimacy and
            grandeur in every experience.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className={styles.btnTextArea}
          >
            <button className={`btnPrimary ${styles.visitBtn}`}>
              Schedule Site Visit
            </button>
          </motion.div>

        </motion.div>
        

      </div>
    </section>
  );
};

export default ClubHouse;

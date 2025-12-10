"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./youtube.module.css";

const YoutubeModal = ({ open, onClose, videoId }: any) => {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default YoutubeModal;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./LocationSection.module.css";

interface LocationProps {
  onOpenModal: () => void;
}

const categoriesData = [
  {
    title: "Roads & Transit",
    list: [
      { name: "NH-24", time: "1 Mins" },
      { name: "Electronic City Metro", time: "5 Mins" },
      { name: "New Delhi Railway Station", time: "25 Mins" },
    ],
  },
  { title: "Temples", list: [] },
  { title: "Airports", list: [] },
  { title: "Educational Institutions", list: [] },
  { title: "Hospitals", list: [] },
  { title: "Shopping & Lifestyle", list: [] },
];



const LocationSection : React.FC<LocationProps> = ({ onOpenModal }) => {
  const [active, setActive] = useState("Roads & Transit");

  const handleToggle = (title:any) => {
    setActive((prev) => (prev === title ? null : title));
  };

  return (
    <section id = "location" className={styles.mainSection}>
      <div className="horizonContainer">
        <motion.div
          className={styles.headingTextArea}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className={styles.subHeading}>Located in the</h3>
          <h2 className={styles.heading}>HEART OF THE INDIRAPURAM</h2>
        </motion.div>

        <div className={styles.titleBox}>
          <p className={styles.subTitle}></p>
          <h2 className={styles.mainTitle}></h2>
        </div>

        <div className={styles.contentArea}>
          <div className={styles.leftBox}>
            {categoriesData.map((item) => {
              const isActive = active === item.title;

              return (
                <div key={item.title} className={styles.categoryWrapper}>
                  <div
                    className={`${styles.categoryTop} ${
                      isActive ? styles.activeTab : styles.inactiveTab
                    }`}
                    onClick={() => handleToggle(item.title)}
                  >
                    <span>{item.title}</span>

                    <span
                      className={`${styles.arrowCircle} ${
                        isActive ? styles.arrowUp : styles.arrowDown
                      }`}
                    >
                      ↑
                    </span>
                  </div>

                  {isActive && item.list.length > 0 && (
                    <ul className={styles.list}>
                      {item.list.map((loc, index) => (
                        <li key={index}>
                          <span>{index + 1}. {loc.name}</span>
                          <span>{loc.time}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.mapBox}>
            <img src="/assets/images/locationmap.webp" alt="location map" />
          </div>
        </div>

        <div className={styles.btnWrap}>
          <button onClick={onOpenModal} className={`btnPrimary ${styles.visitBtn}`}>
            Schedule Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

"use client";
import React, { useEffect, useRef, useState } from "react";
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
  {
    title: "Temples",
    list: [
      { name: "Iskcon Temple", time: "18 Mins" },
      { name: "Akshardham Temple", time: "22 Mins" },
    ],
  },
  {
    title: "Airports",
    list: [
      { name: "Hindon Airport", time: "32 Mins" },
      //  { name: "Noida intl. Airport", time: " Mins" },
      { name: "Indira gandhi intl. Airport", time: "58 Mins" },
    ],
  },
  {
    title: "Educational Institutions",
    list: [
      { name: "Presidium", time: "1 Mins" },
      { name: "G.D. Goenka Public School", time: " Mins" },
      { name: "Jaypee institue of technology", time: "5 Mins" },
      { name: "K.R. Mangalam", time: "7 Mins" },
      { name: "DPS indirapuram", time: "8 Mins" },
      { name: "Amity University", time: "31 Mins" },
      { name: "Genesis Global School", time: "34 Mins" },
    ],
  },
  {
    title: "Hospitals",
    list: [
      { name: "Yashoda Medicity Hospital", time: "8 Mins" },
      { name: "Fortis Hospital Noida", time: "10 Mins" },
      { name: "Max Super Speciality Hospital", time: "14 Mins" },
      { name: "Manipal Hospital", time: "18 Mins" },
    ],
  },
  {
    title: "Shopping & Lifestyle",
    list: [
      { name: "Indirapuram Habitat Centre", time: "1 Mins" },
      { name: "Shipra Mall", time: "3 Mins" },
      { name: "Spectrum Metro Mall", time: "18 Mins" },
      { name: "Logix mall", time: "22 Mins" },
      { name: "DLF Mall of India", time: "23 Mins" },
    ],
  },
];

const LocationSection: React.FC<LocationProps> = ({ onOpenModal }) => {
  const [active, setActive] = useState("Roads & Transit");

  const handleToggle = (title: any) => {
    setActive((prev) => (prev === title ? null : title));
  };

  return (
    <section id="location" className={styles.mainSection}>
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
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.4, ease: "easeInOut" },
                      opacity: { duration: 0.3, ease: "easeInOut" },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    {item.list.length > 0 && (
                      <ul className={styles.list}>
                        {item.list.map((loc, index) => (
                          <li key={index}>
                            <span>
                              {index + 1}. {loc.name}
                            </span>
                            <span>{loc.time}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className={styles.mapBox}>
            <img src="/assets/images/locationmap.webp" alt="location map" />
          </div>
        </div>
        <div className={styles.btnWrap}>
          <button
            onClick={onOpenModal}
            className={`btnPrimary ${styles.visitBtn}`}
          >
            Schedule Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
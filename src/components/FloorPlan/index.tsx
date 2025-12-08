"use client";
import React, { useState } from "react";
import styles from "./FloorPlan.module.css";
import { motion } from "framer-motion";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface FloorProps {
  onOpenModal: () => void;
}

const data = [
  {
    id: 1,
    title: "A UPPER FLOOR PLAN",
    img: "/assets/images/floorPlan/floor_plan1.webp",
  },
  {
    id: 2,
    title: "PH-A TERRACE PLAN",
    img: "/assets/images/floorPlan/floor_plan2.webp",
  },
  {
    id: 3,
    title: "PH-B LOWER FLOOR PLAN",
    img: "/assets/images/floorPlan/floor_plan3.webp",
  },
  {
    id: 4,
    title: "PH-C PLAN",
    img: "/assets/images/floorPlan/floor_plan4.webp",
  },
  {
    id: 5,
    title: "PH-C PLAN",
    img: "/assets/images/floorPlan/floor_plan5.webp",
  },
  {
    id: 6,
    title: "PH-C PLAN",
    img: "/assets/images/floorPlan/floor_plan6.webp",
  },
  {
    id: 7,
    title: "PH-C PLAN",
    img: "/assets/images/floorPlan/floor_plan7.webp",
  },
  {
    id: 8,
    title: "PH-C PLAN",
    img: "/assets/images/floorPlan/floor_plan8.webp",
  },
  {
    id: 9,
    title: "PH-C PLAN",
    img: "/assets/images/floorPlan/floor_plan9.webp",
  },
  {
    id: 10,
    title: "PH-C PLAN",
    img: "/assets/images/floorPlan/floor_plan10.webp",
  },
];

const FloorPlan: React.FC<FloorProps> = ({ onOpenModal }) => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("tower1");

  const maxIndex = data.length - 3;

  const nextSlide = () => index < maxIndex && setIndex(index + 1);
  const prevSlide = () => index > 0 && setIndex(index - 1);

  return (
    <section id="unitPlan" className={styles.mainSection}>
      <h2 className={styles.heading}>UNIT PLAN</h2>

      {/* <div className={styles.tabsContainer}>
        <div
          className={`${styles.tab} ${
            active === "tower1" ? styles.active : ""
          }`}
          onClick={() => setActive("tower1")}
        >
          TOWER 1 UNIT PLANS
        </div>

        <span className={styles.divider}>|</span>

        <div
          className={`${styles.tab} ${
            active === "tower23" ? styles.active : ""
          }`}
          onClick={() => setActive("tower23")}
        >
          TOWER 2 & 3 UNIT PLANS
        </div>
      </div> */}
      <div className={styles.carouselContainer}>
        <button
          className={`${styles.arrowBtn} ${styles.left}`}
          onClick={prevSlide}
        >
          <MdOutlineArrowBackIosNew size={28} color="#fff" />
        </button>

        <div className={styles.sliderWrapper}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
          >
            {data.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.img} alt={item.title} />
                <p className={styles.caption}>{item.title}</p>

                <div className={styles.floorButton}>
                  <button className={styles.floorBtn} onClick={onOpenModal}>
                    View Floor Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.arrowBtn} ${styles.right}`}
          onClick={nextSlide}
        >
          <MdOutlineArrowForwardIos size={28} color="#fff" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className={styles.btnTextArea}
      >
        <button
          onClick={onOpenModal}
          className={`btnPrimary ${styles.visitBtn}`}
        >
          Schedule Site Visit
        </button>
      </motion.div>
    </section>
  );
};

export default FloorPlan;

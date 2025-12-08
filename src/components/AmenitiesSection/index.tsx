"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AmenitiesSection.module.css";

type TabType = "Indoor" | "Outdoor" | "Concierge";
interface AmenitiesProps {
  onOpenModal: () => void;
}

const AmenitiesSection : React.FC<AmenitiesProps>= ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<TabType>("Indoor");

  const tabs: TabType[] = ["Indoor", "Outdoor", "Concierge"];

  const amenities = {
    Indoor: [
      { name: "Boxing Ring", icon: "/assets/images/icons/icon1.png" },
      { name: "Pool Table", icon: "/assets/images/icons/icon2.png" },
      { name: "Squash", icon: "/assets/images/icons/icon3.png" },
      { name: "Table Tennis", icon: "/assets/images/icons/icon4.png" },
      { name: "Aerobics", icon: "/assets/images/icons/icon5.png" },
      { name: "Karate", icon: "/assets/images/icons/icon6.png" },
      { name: "Gym", icon: "/assets/images/icons/icon7.png" },
      { name: "Pilates", icon: "/assets/images/icons/icon8.png" },
      { name: "Jacuzzi", icon: "/assets/images/icons/icon9.png" },
      { name: "Spa", icon: "/assets/images/icons/icon10.png" },
      { name: "Party Hall", icon: "/assets/images/icons/icon11.png" },
      { name: "Music Space", icon: "/assets/images/icons/icon12.png" },
      { name: "Business Center", icon: "/assets/images/icons/icon13.png" },
      { name: "Meeting Room", icon: "/assets/images/icons/icon14.png" },
      { name: "Restaurant", icon: "/assets/images/icons/icon15.png" },
      { name: "Banquet", icon: "/assets/images/icons/icon16.png" },
      { name: "Theatre", icon: "/assets/images/icons/icon17.png" },
      { name: "Card Room", icon: "/assets/images/icons/icon18.png" },
      { name: "Library", icon: "/assets/images/icons/icon19.png" },
      { name: "Kids’ Art Room", icon: "/assets/images/icons/icon20.png" },
      { name: "Video Game Arcade", icon: "/assets/images/icons/icon21.png" },
    ],

    Outdoor: [
      {
        name: "Elderly Sitting Area",
        icon: "/assets/images/icons/outdoorIcon1.png",
      },
      {
        name: "Butterfly Garden",
        icon: "/assets/images/icons/outdoorIcon2.png",
      },
      { name: "Pet Zone", icon: "/assets/images/icons/outdoorIcon3.png" },
      { name: "Walking Track", icon: "/assets/images/icons/outdoorIcon4.png" },
      { name: "Outdoor Yoga", icon: "/assets/images/icons/outdoorIcon5.png" },
      {
        name: "All-season Infinity Pool",
        icon: "/assets/images/icons/outdoorIcon6.png",
      },
      { name: "Terrace Garden", icon: "/assets/images/icons/outdoorIcon7.png" },
      {
        name: "Kids’ Play Area",
        icon: "/assets/images/icons/outdoorIcon8.png",
      },
      {
        name: "3- Tier Security",
        icon: "/assets/images/icons/outdoorIcon9.png",
      },
      { name: "Disposal Room", icon: "/assets/images/icons/outdoorIcon10.png" },
      { name: "Cafeteria", icon: "/assets/images/icons/outdoorIcon11.png" },
      { name: "Outdoor BBQ", icon: "/assets/images/icons/outdoorIcon12.png" },
      { name: "Skating Rink", icon: "/assets/images/icons/outdoorIcon13.png" },
      { name: "Outdoor Gym", icon: "/assets/images/icons/outdoorIcon14.png" },
    ],

    Concierge: [
      { name: "Concierge Desk", icon: "/assets/images/icons/concierge1.png" },
      { name: "House Service", icon: "/assets/images/icons/concierge2.png" },
      { name: "Chef on Call", icon: "/assets/images/icons/concierge3.png" },
      { name: "Laundry Service", icon: "/assets/images/icons/concierge4.png" },
      {
        name: "Gardening Service",
        icon: "/assets/images/icons/concierge5.png",
      },
      {
        name: "Babysitting Service",
        icon: "/assets/images/icons/concierge6.png",
      },
    ],
  };

  return (
    <section id = "amenities" className={styles.mainSection}>
      <div className="horizonContainer">
        <motion.div
          className={styles.headingTextArea}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <h3 className={styles.subHeading}>Amenities</h3>
          <h2 className={styles.heading}>COUNTLESS REASONS TO FEEL ALIVE</h2>
        </motion.div>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {amenities[activeTab].map((item, index) => (
            <motion.div
              key={item.name}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img src={item.icon} alt={item.name} className={styles.icon} />
              <div className={styles.iconText}>{item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button  onClick={onOpenModal} className={`btnPrimary ${styles.visitBtn}`}>
          Schedule Site Visit
        </button>
      </div>
    </section>
  );
};

export default AmenitiesSection;

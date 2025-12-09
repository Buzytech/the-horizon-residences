"use client";
import { useState } from "react";
import styles from "./AmentitesScrollSection.module.css";
import { motion } from "framer-motion";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

type TabType = "Exterior" | "Interior";

interface AmenityItem {
  id: number;
  propertyType?: string;
  location?: string;
  title?: string;
  img: string;
}

interface ScrollSectionProps {
  onOpenModal: () => void;
}


const tabs: TabType[] = ["Exterior", "Interior"];

const data: Record<TabType, AmenityItem[]> = {
  Exterior: [
    {
      id: 1,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/exterior/ext-img-1.webp",
    },
    {
      id: 2,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/exterior/ext-img-2.webp",
    },
    {
      id: 3,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/exterior/ext-img-3.webp",
    },
    {
      id: 4,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/exterior/ext-img-4.webp",
    },
    {
      id: 5,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/exterior/ext-img-5.webp",
    },
    {
      id: 6,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/exterior/ext-img-6.webp",
    },
  ],

  Interior: [
    {
      id: 1,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-1.webp",
    },
    {
      id: 2,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-2.webp",
    },
    {
      id: 3,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-3.webp",
    },
    {
      id: 4,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-4.webp",
    },
    {
      id: 5,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-5.webp",
    },
    {
      id: 6,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-6.webp",
    },
    {
      id: 7,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-7.webp",
    },
    {
      id: 8,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-8.webp",
    },
    {
      id: 9,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-9.webp",
    },
    {
      id: 10,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-10.webp",
    },
    {
      id: 11,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-11.webp",
    },
    {
      id: 12,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-12.webp",
    },
    {
      id: 13,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-13.webp",
    },
    {
      id: 14,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-14.webp",
    },
    {
      id: 15,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-15.webp",
    },
    {
      id: 16,
      propertyType: "Residential",
      location: "Sector 99, Dwarka Expy, Gurugram,",
      img: "/assets/images/interior/Int-img-16.webp",
    },
  ],
};

 const AmentitesScrollSection  : React.FC<ScrollSectionProps> = ({ onOpenModal }) => {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>("Exterior");
  const filteredData = data[activeTab];
  const maxIndex = Math.max(0, filteredData.length - 3);
  const nextSlide = () => index < maxIndex && setIndex(index + 1);
  const prevSlide = () => index > 0 && setIndex(index - 1);

  return (
    <section id="gallery" className={styles.mainSection}>
      <div className={styles.gallery}>Amenities</div>
      <div className={styles.gallerySection}>
        Countless Reasons to Feel Alive
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
            onClick={() => {
              setActiveTab(tab);
              setIndex(0);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselButtonArea}>
          <button
            className={`${styles.arrowBtn} ${
              index === 0 ? styles.disabled : styles.active
            }`}
            onClick={prevSlide}
            disabled={index === 0}
          >
            <IoArrowBackCircleOutline size={50} color="#fff" />
          </button>

          <button
            className={`${styles.arrowBtn} ${
              index === maxIndex ? styles.disabled : styles.active
            }`}
            onClick={nextSlide}
            disabled={index === maxIndex}
          >
            <IoArrowForwardCircleOutline size={50} color="#fff" />
          </button>
        </div>

        <div className={styles.sliderWrapper}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${index * (100 / 1.3)}%)`,
            }}
          >
            {filteredData.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt="img" />

                  <div className={styles.overlayText}>
                    {item.propertyType && (
                      <p className={styles.propertyTitle}>
                        {item.propertyType}
                      </p>
                    )}
                    {item.location && (
                      <p className={styles.locationText}>{item.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className={styles.btnTextArea}
      >
        <button className={`btnPrimary ${styles.visitBtn}`} onClick={onOpenModal}>
          Schedule Site Visit
        </button>
      </motion.div>
    </section>
  );
}

export default AmentitesScrollSection
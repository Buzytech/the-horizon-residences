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
const VISIBLE_CARDS = 1;

const data: Record<TabType, AmenityItem[]> = {
  Exterior: [
    {
      id: 1,
      propertyType: "Acupressure Cam",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/exterior/ext-img-1.webp",
    },
    {
      id: 2,
      propertyType: "Butter Fly Garden",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/exterior/ext-img-2.webp",
    },
    {
      id: 3,
      propertyType: "Canopy Night",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/exterior/ext-img-3.webp",
    },
    {
      id: 4,
      propertyType: "Car Drop Off Zone",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/exterior/ext-img-4.webp",
    },
    {
      id: 5,
      propertyType: "Kids paly area with Skating Ring",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/exterior/ext-img-5.webp",
    },
    {
      id: 6,
      propertyType: "Porch",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/exterior/ext-img-6.webp",
    },
  ],

  Interior: [
    {
      id: 1,
      propertyType: "Balcony Cam",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-1.webp",
    },
    {
      id: 2,
      propertyType: "Bathroom Cam",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-2.webp",
    },
    {
      id: 3,
      propertyType: "Bedroom 1",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-3.webp",
    },
    {
      id: 4,
      propertyType: "Bedroom 2",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-4.webp",
    },
    {
      id: 5,
      propertyType: "Bedroom 3",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-5.webp",
    },
    {
      id: 6,
      propertyType: "Bedroom 4",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-6.webp",
    },
    {
      id: 7,
      propertyType: "Cafe Cam",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-7.webp",
    },
    {
      id: 8,
      propertyType: "Dining Area Cam",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-8.webp",
    },
    {
      id: 9,
      propertyType: "Entrance Lobby",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-9.webp",
    },
    {
      id: 10,
      propertyType: "Kitchen 1",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-10.webp",
    },
    {
      id: 11,
      propertyType: "Kitchen 2",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-11.webp",
    },
    {
      id: 12,
      propertyType: "Lift Lobby",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-12.webp",
    },
    {
      id: 13,
      propertyType: "Living Cam",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-13.webp",
    },
    {
      id: 14,
      propertyType: "Lounge and bar",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-14.webp",
    },
    {
      id: 15,
      propertyType: "Master Bedroom",
      location: "Indirapuram , Gaziabad",
      img: "/assets/images/interior/Int-img-15.webp",
    },
    // {
    //   id: 16,
    //   propertyType: "Residential",
    //   location: "Sector 99, Dwarka Expy, Gurugram,",
    //   img: "/assets/images/interior/Int-img-16.webp",
    // },
  ],
};

const AmentitesScrollSection: React.FC<ScrollSectionProps> = ({
  onOpenModal,
}) => {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>("Exterior");

  const filteredData = data[activeTab];

  const maxIndex = Math.max(0, filteredData.length - VISIBLE_CARDS);

  const nextSlide = () => index < maxIndex && setIndex(index + 1);
  const prevSlide = () => index > 0 && setIndex(index - 1);
  const isLastSlide = index === maxIndex;

  return (
    <section id="gallery" className={styles.mainSection}>
      <div className={styles.gallery}>Luxurious Amenities</div>
      {/* <div className={styles.gallerySection}>
        Countless Reasons to Feel Alive
      </div> */}
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
              transform: isLastSlide
                ? `translateX(calc(-${index * (100 / 1.3)}% + 35%))`
                : `translateX(-${index * (100 / 1.3)}%)`,
            }}
          >
            {filteredData.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt="img" />

                  <div className={styles.overlayText}>
                    <p className={styles.propertyTitle}>{item.propertyType}</p>
                    <p className={styles.locationText}>{item.location}</p>
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
        <button
          className={`btnPrimary ${styles.visitBtn}`}
          onClick={onOpenModal}
        >
          Schedule Site Visit
        </button>
      </motion.div>
    </section>
  );
};

export default AmentitesScrollSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Promation.module.css";
import Image from "next/image";

interface promationsProps {
  onOpenModal: () => void;
}

const logos = [
  {
    src: "/assets/images/logo/cocacolalogo1.png",
    alt: "CocaCola",
    type: "fill",  
    delay: 0.2,
  },
  {
    src: "/assets/images/logo/genesislogo1.png",
    alt: "Genesis",
    type: "fill",
    delay: 0.4,
  },
  {
    src: "/assets/images/logo/horizonlogo1.png",
    alt: "Horizon Group",
    type: "fill",
    delay: 0.6,
  },
  {
    src: "/assets/images/logo/vgslogo1.png",
    alt: "School",
    type: "fill", 
    delay: 0.8,
  },
  {
    src: "/assets/images/logo/easyTigerlogo.png",
    alt: "Easy Tiger",
    type: "fill", 
    delay: 1.0,
  },
];


const PromationSection: React.FC<promationsProps> = ({ onOpenModal }) => {
  return (
    <section className={styles.mainSection}>
      <div className="horizonContainer">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.aboutHeading}
        >
          <div className={styles.headingTextArea}>
            <h4 className={styles.subtitle}>The Last, The Best</h4>
            <h2 className={styles.title}>THE ONLY ONE</h2>
          </div>
          <h3 className={styles.mainHeading}>THE HORIZON RESIDENCES</h3>
          <p className={styles.description}>
            THE FINAL CHAPTER OF ULTRA-LUXURY LIVING IN <span>INDIRAPURAM</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={styles.legacySection}
        >
          <div className={styles.legacyText}>From the legacy of</div>

          {/* <div className={styles.legacyBrands}>
            <motion.div
              className={styles.logoIcon}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                fill
                src="/assets/images/logo/cocacolalogo.png"
                alt="CocaCola" />
            </motion.div>

            <motion.img
              src="/assets/images/logo/genesislogo.png"
              alt="Genesis"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.img
              src="/assets/images/logo/horizonlogo.png"
              alt="Horizon Group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <motion.img
              src="/assets/images/logo/vgslogo.png"
              alt="School"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <motion.img
              src="/assets/images/logo/easyTigerlogo.png"
              alt="Eazy Tiger"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.10 }}
            />
          </div> */}

          <div className={styles.legacyBrands}>
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className={logo.type === "fill" ? styles.logoIcon : ""}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: logo.delay }}
              >
                {logo.type === "fill" ? (
                  <Image fill src={logo.src} alt={logo.alt} />
                ) : ""}
              </motion.div>
            ))}
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className={styles.descriptionSection}
        >
          <div className={styles.leftColumn}>
            Positioned at Indirapuram’s edge, offering connectivity, The Horizon
            Residences stands as a distinctive landmark, set near a vibrant
            shopping arcade that adds both convenience and charm to everyday
            living. It stands upon the final coveted expanse of land in the
            neighbourhood—a possession that cannot be recreated.
            <br />
            <br />
            With only 264 expansive residences in 4, 4.5, and 5 BHK formats,
            completed with private Zoom rooms and dedicated service quarters.
            These homes are reserved for those who view exclusivity as a
            necessity. The architecture balances scale with elegance, where
            spaces open wide and light flows in naturally. Anchored in the
            city’s epicentre, the address ensures seamless connectivity to the
            city’s most sought-after conveniences and the forthcoming metro.
          </div>

          <div className={styles.rightColumn}>
            <h3>Project Highlights :</h3>
            <ul>
              <li>Last luxury address in Indirapuram</li>
              <li>264 exclusive residences in 4, 4.5 & 5 BHK configurations</li>
              <li>Located near premium retail & lifestyle zones</li>
              <li>Private Zoom rooms and dedicated service quarters</li>
              <li>Elegant architecture with abundant natural light</li>
              <li>Seamless connectivity to schools, hospitals & metro</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className={styles.pricingSection}
        >
          <div className={styles.priceBox}>
            <div className={styles.priceAmount}>₹ 6.18 CR*</div>
            <div className={styles.priceText}>ONWARDS</div>
          </div>

          <div className={styles.areaBox}>
            <div className={styles.areaSize}>
              3,865 <span>SQ. FT.</span>
            </div>
            <div className={styles.areaSqM}>359.2 SQ. MTR ONWARDS</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className={styles.btnTextArea}
        >
          <div className={styles.flexiblePlane}>
            50:25:25 Flexible Payment Plan
          </div>
          <div className={styles.residenceDetails}>
            4, 4.5, 5 BHK RESIDENCES
          </div>
          <button
            onClick={onOpenModal}
            className={`btnPrimary ${styles.visitBtn}`}
          >
            Schedule Site Visit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PromationSection;

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItemsLeft = [
    { name: "Overview", link: "#overview" },     
    { name: "Amenities", link: "#amenities" },  
    { name: "Location", link: "#location" }, 
  ];

  const menuItemsRight = [
    { name: "Unit Plan", link: "#unitPlan" },    
    { name: "Gallery", link: "#gallery" },      
    { name: "About us", link: "#aboutus" },   
  ];

  return (
    <header className={`${styles.headerSection} ${scrolled ? styles.scrolled : ""}`}>
      <div className="horizonContainer">
        <nav className={styles.navbar}>
          <div className={styles.mobileLogo}>
            <img src="/assets/images/logo/logo.svg" alt="logo" />
          </div>

          <div className={`${styles.navLinks} ${mobileOpen ? styles.mobileActive : ""}`}>
            {menuItemsLeft.map((item, index) => (
              <motion.a
                key={item.name}
                    href={item.link} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                   {item.name}
              </motion.a>
            ))}
            <div className={styles.desktopLogo}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src="/assets/images/logo/logo.svg" alt="logo" />
              </motion.div>
            </div>
            {menuItemsRight.map((item, index) => (
              <motion.a
              key={item.name}
                href={item.link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: (index + menuItemsLeft.length) * 0.1,
                }}
              >
              {item.name}
              </motion.a>
            ))}

            <div className={styles.mobileContact}>
              <button className={styles.contactButton}>Contact Us</button>
            </div>
          </div>

          <div className={styles.pushButton}>
            <button onClick={onOpenModal} className={styles.contactButton}>Contact Us</button>
          </div>

          <div className={styles.burger} onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={mobileOpen ? styles.burgerActive : ""}></span>
            <span className={mobileOpen ? styles.burgerActive : ""}></span>
            <span className={mobileOpen ? styles.burgerActive : ""}></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

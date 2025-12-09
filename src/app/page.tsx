"use client";

import InquiryModal from "@/common/InquiryModal";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import AmentitesScrollSection from "@/components/AmentitesScrollSection";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import FloorPlan from "@/components/FloorPlan";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import LocationSection from "@/components/LocationSection";
import LoungeSection from "@/components/LoungeSection";
import PriceListSection from "@/components/PriceListSection";
import PromationSection from "@/components/PromationSection";
import YoutubeSection from "@/components/YoutubeSection";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PlayVidioSection from "@/components/PlayVidioSection";
import ClubHouse from "@/components/ClubHouse";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  // useEffect(() => {
  //   // setModalOpen(true);
  //   const resetTimer = () => {
  //     if (scrollTimer.current) clearTimeout(scrollTimer.current);
  //     scrollTimer.current = setTimeout(() => {
  //       setModalOpen(true);
  //     }, 20000);
  //   };
  //   resetTimer();
  //   window.addEventListener("scroll", resetTimer);
  //   return () => {
  //     window.removeEventListener("scroll", resetTimer);
  //     if (scrollTimer.current) clearTimeout(scrollTimer.current);
  //   };
  // }, []);

  return (
    <>
      <Header onOpenModal={() => setModalOpen(true)} />
      <main>
        <Banner />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <PromationSection onOpenModal={() => setModalOpen(true)} />
        </motion.div>
        <YoutubeSection onOpenModal={() => setModalOpen(true)} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AmenitiesSection onOpenModal={() => setModalOpen(true)} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LocationSection onOpenModal={() => setModalOpen(true)} />
        </motion.div>
        <PlayVidioSection onOpenModal={() => setModalOpen(true)} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FloorPlan onOpenModal={() => setModalOpen(true)} />
          <ClubHouse onOpenModal={() => setModalOpen(true)}  />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AmentitesScrollSection onOpenModal={() => setModalOpen(true)} />
        </motion.div>
        <PriceListSection />
        <LoungeSection onOpenModal={() => setModalOpen(true)} />
        <AboutSection />
        <ContactForm  onOpenModal={() => setModalOpen(true)} />
        <FooterSection />
        {modalOpen && <InquiryModal onClose={() => setModalOpen(false)} />}
      </main>
    </>
  );
}

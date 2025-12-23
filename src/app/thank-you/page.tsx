"use client";

import InquiryModal from "@/common/InquiryModal";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.wrapper}>
      <Header onOpenModal={() => setModalOpen(true)} />

      <div className={styles.horizonContainer}>
        <div className={styles.logo}>
          <img src="/assets/images/thank_logo.png" alt="Thank you logo" />
        </div>
       
        <div className={styles.textBlock}>
          <h2 className={styles.title}> Thank you for your interest.</h2>
          <h3 className={styles.subTitle}>Greetings from Harmony Infra</h3>
          <p className={styles.message}>
            Our Sales Manager will get in touch with you shortly.
          </p>
        </div>

        <div>
          <Link href="/" className={styles.backBtn}>
            <span>←</span> Go Back To Home
          </Link>
        </div>
      </div>

      {modalOpen && <InquiryModal onClose={() => setModalOpen(false)} />}
    </section>
  );
};

export default ThankYou;

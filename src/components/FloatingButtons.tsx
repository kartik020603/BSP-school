"use client";

import { Phone, MessageCircle } from "lucide-react";
import styles from "./FloatingButtons.module.css";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className={styles.floatingContainer}>
      <motion.a
        href="tel:+919012555404"
        className={`${styles.floatBtn} ${styles.callBtn}`}
        aria-label="Call Us Now"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(245, 158, 11, 0.6)",
            "0 0 0 15px rgba(245, 158, 11, 0)",
            "0 0 0 0 rgba(245, 158, 11, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Phone size={24} />
      </motion.a>
      
      <a
        href="https://wa.me/919012555404"
        className={`${styles.floatBtn} ${styles.whatsappBtn}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

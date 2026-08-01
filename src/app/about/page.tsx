"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react";
import styles from "./page.module.css";

export default function About() {
  const features = [
    { icon: <CheckCircle2 size={24} />, text: "Government Recognised Institution" },
    { icon: <Award size={24} />, text: "Quality Education" },
    { icon: <Users size={24} />, text: "Expert Faculty" },
    { icon: <BookOpen size={24} />, text: "Modern Workshops" },
  ];

  return (
    <div className="section-padding" style={{ background: "var(--bg-main)", minHeight: "calc(100vh - 80px)" }}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>About <span>B.S.P. ITI College</span></h2>
          <p>Skill Today, Success Tomorrow</p>
        </motion.div>
        
        <motion.div 
          className={styles.aboutCard}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className={styles.aboutText}>
            Welcome to B.S.P. ITI College, located in Kanjaulighat, Mathura. We are dedicated to providing excellent technical education to empower students for a bright and self-reliant future. Our institution offers professional courses like Electrician and Fitter to meet modern industry demands.
          </p>
          <p className={styles.aboutText}>
            Alongside our ITI programs, we also run classes up to the 8th standard, focusing on a strong educational foundation for younger students. With experienced faculty, fully equipped practical labs, and a commitment to 100% placement assistance, we aim to bridge the gap between education and employment.
          </p>

          <div className={styles.featuresList}>
            {features.map((item, index) => (
              <motion.div 
                key={index}
                className={styles.featureItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className={styles.featureIcon}>{item.icon}</div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

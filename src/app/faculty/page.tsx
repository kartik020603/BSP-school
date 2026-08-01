"use client";

import { motion } from "framer-motion";
import { User, Award, BookOpen, Settings } from "lucide-react";
import styles from "./page.module.css";

export default function Faculty() {
  const facultyList = [
    {
      name: "Mr. Sharma",
      role: "Principal",
      icon: <Award size={50} strokeWidth={1.5} />,
      desc: "15+ years of experience in technical education administration."
    },
    {
      name: "Mr. R. Singh",
      role: "Head Electrician Instructor",
      icon: <BookOpen size={50} strokeWidth={1.5} />,
      desc: "Expert in modern electrical circuits and safety protocols."
    },
    {
      name: "Mr. A. Kumar",
      role: "Head Fitter Instructor",
      icon: <Settings size={50} strokeWidth={1.5} />,
      desc: "Specialized in structural fitting and mechanical operations."
    },
    {
      name: "Mrs. Verma",
      role: "Primary Section Head",
      icon: <User size={50} strokeWidth={1.5} />,
      desc: "Dedicated to building a strong foundation for young learners."
    }
  ];

  return (
    <div className="section-padding" style={{ background: "var(--bg-main)", minHeight: "calc(100vh - 80px)" }}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Our <span>Faculty</span></h2>
          <p>Meet the experts shaping your future</p>
        </motion.div>
        
        <div className={styles.facultyGrid}>
          {facultyList.map((person, index) => (
            <motion.div 
              key={index}
              className={styles.facultyCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className={styles.facultyAvatar}>
                {person.icon}
              </div>
              <h3 className={styles.facultyName}>{person.name}</h3>
              <div className={styles.roleBadge}>{person.role}</div>
              <p className={styles.facultyDesc}>{person.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

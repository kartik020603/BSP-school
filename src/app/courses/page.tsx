"use client";

import { motion } from "framer-motion";
import { Zap, Wrench, GraduationCap } from "lucide-react";
import styles from "./page.module.css";

export default function Courses() {
  const courses = [
    {
      icon: <Zap size={48} strokeWidth={1.5} />,
      title: "ITI - Electrician",
      desc: "Learn comprehensive electrical wiring, maintenance of electrical equipment, and understand circuits. Be ready for a high-demand career.",
    },
    {
      icon: <Wrench size={48} strokeWidth={1.5} />,
      title: "ITI - Fitter",
      desc: "Master the skills of assembling, structural fitting, and mechanical maintenance. Highly valued in manufacturing and construction sectors.",
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
          <h2>Our <span>Trades & Courses</span></h2>
          <p>Choose your path to a successful career</p>
        </motion.div>
        
        <div className={styles.cardsGrid}>
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.cardIcon}>{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.schoolSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <GraduationCap size={40} color="var(--primary-blue)" />
            <h3 className={styles.schoolTitle}>Primary & Middle School Education</h3>
          </div>
          <p>
            Apart from technical trades, B.S.P. College also focuses on early education by offering complete classes up to the 8th standard. We ensure a strong academic and moral foundation for children in a nurturing environment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

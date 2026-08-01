"use client";

import Link from "next/link";
import { GraduationCap, Settings, Briefcase, Phone } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: <GraduationCap size={40} />,
      title: "Expert Trainers",
      desc: "Experienced instructors providing quality education & practical skills.",
    },
    {
      icon: <Settings size={40} />,
      title: "Practical Training",
      desc: "प्रैक्टिकल ट्रेनिंग और आधुनिक वर्कशॉप की सुविधा।",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Placement Assistance",
      desc: "100% प्लेसमेंट सहायता और जॉब गाइडेंस।",
    },
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/hero1.jpg" 
          alt="Hero background" 
          fill 
          style={{ objectFit: 'cover' }}
          priority 
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <motion.h2 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <br />
            <span className={styles.heroHighlight}>B.S.P. ITI College</span>
          </motion.h2>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            बनाइए अपना भविष्य (Build Your Future) - Skill Today, Success Tomorrow.
          </motion.p>
          
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/admissions" className={`${styles.btn} ${styles.btnPrimary}`}>
              Admissions Open
            </Link>
            <a href="tel:+919012555404" className={`${styles.btn} ${styles.btnSecondary}`}>
              <Phone size={18} /> Call: 9012555404
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Features Highlight */}
      <section className={`section-padding ${styles.featuresSection}`}>
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose <span>B.S.P. ITI College?</span></h2>
            <p>हमारी विशेषताएं</p>
          </motion.div>
          
          <div className={styles.cardsGrid}>
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className={`section-padding ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaContent}`}>
          <motion.h2 
            className={styles.ctaTitle}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Admissions Open 2026-27! (प्रवेश प्रारंभ)
          </motion.h2>
          <p className={styles.ctaText}>
            कौशल सीखें, आत्मनिर्भर बनें और उज्ज्वल भविष्य की ओर बढ़ें
          </p>
          <motion.a 
            href="tel:+919012555404" 
            className={`${styles.btn} ${styles.btnWhite}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={18} /> Call Now: 9012555404
          </motion.a>
        </div>
      </section>
    </div>
  );
}

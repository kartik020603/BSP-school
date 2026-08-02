"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Settings, Briefcase, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [activeTab, setActiveTab] = useState('vision');

  const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextHero = () => setCurrentHero((prev) => (prev + 1) % heroImages.length);
  const prevHero = () => setCurrentHero((prev) => (prev - 1 + heroImages.length) % heroImages.length);

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
        {heroImages.map((src, index) => (
          <Image 
            key={src}
            src={src} 
            alt={`Hero background ${index + 1}`} 
            fill 
            style={{ 
              objectFit: 'cover', 
              opacity: currentHero === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 1
            }}
            priority={index === 0}
          />
        ))}

        {/* Slider Controls */}
        <button className={styles.sliderBtnLeft} onClick={prevHero} aria-label="Previous slide">
          <ChevronLeft size={30} />
        </button>
        <button className={styles.sliderBtnRight} onClick={nextHero} aria-label="Next slide">
          <ChevronRight size={30} />
        </button>

      </section>

      {/* Hero Text Section */}
      <section className={`section-padding ${styles.heroTextSection}`}>
        <div className="container text-center">
          <motion.h1 
            className={styles.heroTextTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            B.S.P. ITI College
          </motion.h1>
          
          <motion.p 
            className={styles.heroTextSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            बनाइए अपना भविष्य (Build Your Future) - Skill Today, Success Tomorrow.
          </motion.p>
          
          <motion.div 
            className={styles.heroTextButtons}
            initial={{ opacity: 0, y: 20 }}
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

      {/* Vision and Goals Section */}
      <section className={`section-padding ${styles.visionGoalsSection}`}>
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>College <span>Vision & Goals</span></h2>
            <p>Our guiding principles</p>
          </motion.div>
          
          <div className={styles.tabContainer}>
            <div className={styles.tabButtons}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'vision' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                Vision
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'goals' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('goals')}
              >
                Goals
              </button>
            </div>
            
            <div className={styles.tabContent}>
              <AnimatePresence mode="wait">
                {activeTab === 'vision' ? (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={styles.tabPane}
                  >
                    <h3>Our Vision</h3>
                    <p>To be a premier technical institution that empowers youth with world-class skill training, fostering innovation, self-reliance, and leadership to contribute meaningfully to society and the nation's industrial growth.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="goals"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={styles.tabPane}
                  >
                    <h3>Our Goals</h3>
                    <ul className={styles.goalsList}>
                      <li>Provide industry-aligned technical education and practical training.</li>
                      <li>Ensure 100% placement assistance and career guidance for our students.</li>
                      <li>Equip students with modern technological skills and professional ethics.</li>
                      <li>Promote entrepreneurship and self-employment among the youth.</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

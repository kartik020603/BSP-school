"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Settings, Briefcase, Phone, ChevronLeft, ChevronRight, Monitor, Wrench, BookOpen, Trophy } from "lucide-react";
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
    "/images/hero4.jpg",
    "/images/hero5.jpg"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentHero, heroImages.length]);

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

      {/* Facilities Section */}
      <section className={`section-padding ${styles.facilitiesSection}`}>
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our <span>Campus Facilities</span></h2>
            <p>आधुनिक सुविधाएं (Modern Infrastructure)</p>
          </motion.div>

          <div className={styles.facilitiesGrid}>
            {[
              { icon: <Monitor size={30} />, title: "Computer Lab", desc: "High-tech computer lab with internet connectivity." },
              { icon: <Wrench size={30} />, title: "Modern Workshops", desc: "Fully equipped workshops for practical training." },
              { icon: <BookOpen size={30} />, title: "Library", desc: "Vast collection of technical books and journals." },
              { icon: <Trophy size={30} />, title: "Sports & Events", desc: "Promoting physical fitness and extracurricular activities." }
            ].map((facility, idx) => (
              <motion.div 
                key={idx} 
                className={styles.facilityCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ translateY: -10 }}
              >
                <div className={styles.facilityIcon}>{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className={`section-padding ${styles.gallerySection}`}>
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Life at <span>B.S.P. ITI</span></h2>
            <p>Training & Event Gallery</p>
          </motion.div>

          <div className={styles.galleryGrid}>
            {[
              { src: "/images/iti_computer_lab.png", title: "Modern Computer Lab" },
              { src: "/images/iti_workshop.png", title: "Lathe Machine Practical" },
              { src: "/images/iti_electrician.png", title: "Electrician Trade Practical" },
              { src: "/images/iti_fitter.png", title: "Fitter Trade Practical" },
              { src: "/images/iti_library.png", title: "Campus Library & Study Area" },
              { src: "/images/iti_event.png", title: "College Events & Celebrations" }
            ].map((img, idx) => (
              <motion.div 
                key={idx} 
                className={styles.galleryItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.galleryImgWrapper}>
                  <Image src={img.src} alt={img.title} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.galleryOverlay}>
                    <span>{img.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters / Placement Partners Section */}
      <section className={`section-padding ${styles.recruitersSection}`}>
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our <span>Placement Partners</span></h2>
            <p>Top recruiters where our students get placed</p>
          </motion.div>
          
          <div className={styles.marqueeContainer}>
            <motion.div 
              className={styles.marqueeContent}
              animate={{ x: [0, -1500] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {["Tata Motors", "Maruti Suzuki", "Hero MotoCorp", "L&T", "Honda", "Mahindra", "Wipro", "Jindal Steel"].map((company, idx) => (
                <div key={idx} className={styles.recruiterBox}>
                  {company}
                </div>
              ))}
              {["Tata Motors", "Maruti Suzuki", "Hero MotoCorp", "L&T", "Honda", "Mahindra", "Wipro", "Jindal Steel"].map((company, idx) => (
                <div key={`dup-${idx}`} className={styles.recruiterBox}>
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className={`section-padding ${styles.mapSection}`}>
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our <span>Location</span></h2>
            <p>Visit our campus in Mathura</p>
          </motion.div>
          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.737304538029!2d77.84429257528647!3d27.32140887640596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397381006a3ae7d1%3A0x65fa4c7600182974!2sB.S.P%20iti%20college%20Kanjauli%20Ghat%20Mathura!5e0!3m2!1sen!2sin!4v1785929218412!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
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

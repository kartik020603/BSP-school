"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Phone Number",
      content: <a href="tel:+919012555404">+91 9012555404</a>
    },
    {
      icon: <MapPin size={28} />,
      title: "Our Address",
      content: <p>B.S.P. ITI College, Kanjaulighat,<br />Mathura, Uttar Pradesh, India</p>
    },
    {
      icon: <Mail size={28} />,
      title: "Email Address",
      content: <a href="mailto:info@bspcollege.example.com">info@bspcollege.example.com</a>
    },
    {
      icon: <Clock size={28} />,
      title: "Working Hours",
      content: <p>Mon - Sat: 9:00 AM - 5:00 PM<br />Sunday: Closed</p>
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
          <h2>Contact <span>Us</span></h2>
          <p>We'd love to hear from you</p>
        </motion.div>
        
        <div className={styles.contactContainer}>
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              className={styles.infoItem}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {info.icon}
              </div>
              <div className={styles.infoContent}>
                <h4>{info.title}</h4>
                {info.content}
              </div>
            </motion.div>
          ))}

          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.737304538029!2d77.84429257528647!3d27.32140887640596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397381006a3ae7d1%3A0x65fa4c7600182974!2sB.S.P%20iti%20college%20Kanjauli%20Ghat%20Mathura!5e0!3m2!1sen!2sin!4v1785929218412!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

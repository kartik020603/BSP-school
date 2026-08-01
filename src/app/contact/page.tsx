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
             <div style={{ textAlign: "center" }}>
               <MapPin size={48} color="var(--primary-blue)" style={{ marginBottom: "15px", opacity: 0.5 }} />
               <p>Google Maps Embed would go here<br/>(Kanjaulighat, Mathura)</p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

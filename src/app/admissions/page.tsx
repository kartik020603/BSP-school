"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Admissions() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! We will contact you soon.");
  };

  return (
    <div className="section-padding" style={{ background: "var(--bg-main)", minHeight: "calc(100vh - 80px)" }}>
      <div className={`container ${styles.admissionsContainer}`}>
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Admission <span>Form</span></h2>
          <p>Begin your journey with us</p>
        </motion.div>
        
        <motion.div 
          className={styles.infoBanner}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Admissions Open for Session 2026-27</h3>
          <p>Please fill out the form below or call us directly at <strong>9012555404</strong> for immediate assistance.</p>
        </motion.div>

        <motion.form 
          className={styles.admissionForm}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name (Student)</label>
            <input type="text" id="fullName" className={styles.formInput} placeholder="Enter full name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" className={styles.formInput} placeholder="10-digit mobile number" required pattern="[0-9]{10}" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="course">Select Course / Trade</label>
            <select id="course" className={styles.formInput} required>
              <option value="" disabled selected>Select an option</option>
              <option value="electrician">ITI - Electrician</option>
              <option value="fitter">ITI - Fitter</option>
              <option value="school">School (Up to 8th Standard)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <textarea id="address" rows={4} className={styles.formInput} placeholder="Enter your full address" required></textarea>
          </div>

          <motion.button 
            type="submit" 
            className={styles.submitBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Application
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

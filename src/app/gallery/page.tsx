"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";

export default function Gallery() {
  // Using generic names as they will be copied from the generated artifacts
  const photos = [
    { src: "/images/gallery/gallery_annual_function_1785565760599.png", title: "Annual Function" },
    { src: "/images/gallery/gallery_christmas_1785565771625.png", title: "Christmas Celebration" },
    { src: "/images/gallery/gallery_holi_1785565782335.png", title: "Holi Festival" },
    { src: "/images/gallery/gallery_diwali_1785565800902.png", title: "Diwali Celebration" },
    { src: "/images/gallery/gallery_republic_day_1785565810932.png", title: "Republic Day" },
    { src: "/images/gallery/gallery_sports_day_1785565823118.png", title: "Sports Day" },
    { src: "/images/gallery/gallery_teachers_day_1785565843845.png", title: "Teachers Day" },
    { src: "/images/gallery/gallery_campus_tour_1785565854506.png", title: "Campus Tour" },
    { src: "/images/gallery/gallery_workshop_1785565866064.png", title: "Technical Workshop" },
  ];

  return (
    <div className="section-padding" style={{ background: "var(--bg-main)", minHeight: "calc(100vh - 80px)" }}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Photo <span>Gallery</span></h2>
          <p>Glimpses of life at B.S.P. ITI College</p>
        </motion.div>
        
        <div className={styles.galleryGrid}>
          {photos.map((photo, index) => (
            <motion.div 
              key={index}
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image 
                src={photo.src} 
                alt={photo.title}
                fill
                className={styles.galleryImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.overlay}>
                <h4>{photo.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

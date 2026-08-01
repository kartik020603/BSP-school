"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <h1 className={styles.logoText}>
              B.S.P. <span className={styles.logoHighlight}>ITI College</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.navMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.navLink} ${
                pathname === link.path ? styles.activeLink : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+919012555404" className={styles.callBtn}>
            <Phone size={18} /> 9012555404
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            <nav className={styles.navMenu}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={closeMenu}
                  className={`${styles.navLink} ${
                    pathname === link.path ? styles.activeLink : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+919012555404" className={styles.callBtn}>
                <Phone size={18} /> Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

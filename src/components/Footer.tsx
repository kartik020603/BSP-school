import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container text-center ${styles.content}`}>
        <p className={styles.text}>&copy; {currentYear} B.S.P. ITI College. All Rights Reserved.</p>
        <p className={styles.text}>Kanjaulighat, Mathura | Ph: 9012555404</p>
      </div>
    </footer>
  );
}

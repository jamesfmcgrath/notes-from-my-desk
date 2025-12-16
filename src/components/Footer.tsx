import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.socials}>
          <a href="#" aria-label="Twitter" className={styles.socialLink}><FaTwitter /></a>
          <a href="#" aria-label="GitHub" className={styles.socialLink}><FaGithub /></a>
          <a href="#" aria-label="LinkedIn" className={styles.socialLink}><FaLinkedin /></a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} James McGrath. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

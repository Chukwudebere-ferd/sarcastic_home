import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} glass`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={`${styles.logo} serif`}>Sarcastic Geeks</h2>
            <p className={styles.tagline}>A Normal Life Is Boring.</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.column}>
              <h4>The Trybe</h4>
              <Link href="#about">About Us</Link>
              <Link href="#roadmap">Roadmap</Link>
              <Link href="#events">Events</Link>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/refund">Refund Policy</Link>
            </div>
            <div className={styles.column}>
              <h4>Social</h4>
              <a href="https://twitter.com/sarcasticgeek4u" target="_blank" rel="noopener noreferrer">Twitter / X</a>
              <a href="mailto:mail@sarcasticgeeks.com">Contact Us</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2026 Sarcastic Geeks Trybe. All rights reserved.</p>
          <div className={styles.socialIcons}>
            {/* Add icons here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

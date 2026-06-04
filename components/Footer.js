import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.column}>
              <h4>Social</h4>
              <a href="https://twitter.com/sarcasticgeek4u" target="_blank" rel="noopener noreferrer">@sarcasticgeek4u (Twitter/X)</a>
            </div>
          </div>
        </div>

        {/* Big Display Text Requested by User */}
        <div className={styles.displayTextWrapper}>
          <motion.h1 
            whileHover={{ 
              color: 'var(--neon-cyan)',
              textShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
              opacity: 0.3
            }}
            transition={{ duration: 0.5 }}
            className={styles.displayText}
          >
            SARCASTIC GEEKS
          </motion.h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

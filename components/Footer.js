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
          <motion.div 
            className={styles.displayText}
          >
            {["SARCASTIC", "GEEKS"].map((word, i) => (
              <motion.span
                key={i}
                className={styles.word}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.1, 0.3, 0.1],
                  textShadow: [
                    "0 0 0px rgba(168, 85, 247, 0)",
                    "0 0 30px rgba(168, 85, 247, 0.4)",
                    "0 0 0px rgba(168, 85, 247, 0)"
                  ]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  color: 'var(--neon-cyan)',
                  opacity: 0.5,
                  transition: { duration: 0.3 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

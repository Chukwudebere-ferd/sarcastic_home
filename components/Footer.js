import { motion } from 'framer-motion';
import { X, Code2, Briefcase, Play } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>Sarcastic Geeks</h2>
            <p className={styles.tagline}>
              A developer community where you build, play, learn, and earn. 
              Forget boring — let's geek out.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.column}>
              <h4>Explore</h4>
              <a href="#projects">Our Projects</a>
              <a href="#services">Our Services</a>
              <a href="#roadmap">Roadmap</a>
            </div>
            <div className={styles.column}>
              <h4>Community</h4>
              <a href="#trybe">The Trybe</a>
              <a href="#events">Events</a>
              <a href="#discord">Discord</a>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className={styles.displayTextWrapper}>
          <motion.h2 
            className={styles.displayText}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.03, y: 0 }}
            transition={{ duration: 1 }}
          >
            A NORMAL LIFE IS BORING
          </motion.h2>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Sarcastic Geeks. Built by geeks, for geeks.</p>
          
          <div className={styles.socials}>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--brand-cyan)' }} href="#" className={styles.socialIcon}><X size={20} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--brand-cyan)' }} href="#" className={styles.socialIcon}><Code2 size={20} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--brand-cyan)' }} href="#" className={styles.socialIcon}><Briefcase size={20} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--brand-cyan)' }} href="#" className={styles.socialIcon}><Play size={20} /></motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

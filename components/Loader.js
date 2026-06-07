import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Loader.module.css';

const phrases = [
  'SNEAKING INTO SERVERS...',
  'LOCALIZING LINKEDIN...',
  'BEZ AI IS THINKING...',
  'GEEKING OUT...',
  'DONE.'
];

const glitchRepeatDelays = [0.4, 1.1, 0.7, 1.5, 0.9];

const Loader = ({ finishLoading }) => {
  const [text, setText] = useState('INITIALIZING...');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < phrases.length - 1) {
        setText(phrases[i]);
        i++;
      } else {
        setText(phrases[phrases.length - 1]);
        clearInterval(interval);
        setTimeout(finishLoading, 800);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div 
      className={styles.overlay}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className={styles.content}>
        {/* Crazy Rotating Rings */}
        <div className={styles.rings}>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className={`${styles.ring} ${styles.ring1}`}
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className={`${styles.ring} ${styles.ring2}`}
          />
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className={`${styles.ring} ${styles.ring3}`}
          />
        </div>

        {/* Pulsing Logo / Name */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={styles.logoContainer}
        >
          <h1 className="serif">SG</h1>
          <motion.div 
            animate={{ 
              opacity: [0.2, 1, 0.2],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={styles.statusText}
          >
            {text}
          </motion.div>
        </motion.div>

        {/* Background Glitch Elements */}
        <div className={styles.glitchContainer}>
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                x: [0, (i % 2 === 0 ? 50 : -50), 0],
                opacity: [0, 0.1, 0]
              }}
              transition={{ 
                duration: 0.2, 
                repeat: Infinity, 
                delay: i * 0.5,
                repeatDelay: glitchRepeatDelays[i] 
              }}
              className={styles.glitchLine}
              style={{ top: `${20 * i}%` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;

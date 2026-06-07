import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

export const Component = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className={styles.heroContainer}>
      <div className={styles.backgroundEffects}>
        <div className={styles.glow} />
        <div className={styles.grid} />
      </div>

      <motion.div style={{ opacity }} className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.badge}
        >
          <span className={styles.pulse} />
          0+ joined the trybe
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.title}
        >
          Localizing LinkedIn: <br />
          <span className="serif">Join Sarcastic Geeks Trybe</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={styles.subtitle}
        >
          A developer community where you build, play, learn, and earn. <br />
          From AI to Web3, games to code. Forget boring — let's geek out.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className={styles.ctaGroup}
        >
          <button className={styles.primaryBtn}>Join Sarcastic Geeks Trybe</button>
          <button className={styles.secondaryBtn}>Explore the Roadmap</button>
        </motion.div>

        <motion.div 
          className={styles.heroImageWrapper}
          style={{ y: y1 }}
        >
          <img 
            src="https://sarcasticgeeks.com/images/trybe-trio.jpg" 
            alt="The Trybe" 
            className={styles.heroImage}
          />
        </motion.div>
      </motion.div>

      {/* Floating Elements (Simulating Cowrie coins) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.cowrie}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
            scale: 0.5 + Math.random()
          }}
        />
      ))}
    </div>
  );
};

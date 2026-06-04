import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const words = "Localizing LinkedIn: Join Sarcastic Geeks Trybe — a developer community where you build, play, learn, and earn.".split(" ");

  return (
    <section className={styles.hero}>
      {/* 3D-like Floating Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`${styles.shape} ${styles.shape1}`}
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className={`${styles.shape} ${styles.shape2}`}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={styles.glow}
        />
      </div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            0+ joined the trybe
          </div>

          <h1 className={styles.headline}>
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={word.includes("Sarcastic") || word.includes("Trybe") ? styles.highlight : ""}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 1 }}
            className={styles.subheadline}
          >
            From AI to Web3, games to code. Forget boring — let's geek out.
          </motion.p>

          <div className={styles.actions}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.primaryBtn} clipped-corner neon-glow`}
            >
              Join Sarcastic Geeks Trybe
            </motion.button>
            <button className={styles.secondaryBtn}>
              Explore the Roadmap
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

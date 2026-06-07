import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './HelloWorld.module.css';

const HelloWorld = () => {
  const avatars = [
    'https://sarcasticgeeks.com/images/eche2.png',
    'https://sarcasticgeeks.com/images/godwin.png',
    'https://sarcasticgeeks.com/images/morgan.png',
    'https://sarcasticgeeks.com/images/enugu.png',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hello-world" className={styles.section}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.div className={styles.categoryTag} variants={itemVariants}>
              <span className={styles.categoryLabel}>Career Platform</span>
              <span className={styles.newBadge}>NEW</span>
            </motion.div>
            
            <motion.div className={styles.titleWrapper} variants={itemVariants}>
              <h2 className={styles.mainTitle}>
                Hello World <span className="serif">flips the job hunt.</span>
              </h2>
            </motion.div>

            <motion.p className={styles.description} variants={itemVariants}>
              We do not do <b>"apply and pray"</b>, We track <b>freshly funded startups</b>, 
              sniff out what they actually need, and our AI hands you a roadmap 
              with proof-of-work to get that job. Your projects, challenges, and 
              Trybe courses <b>do the talking</b> — no cover letter bs needed. Even if 
              you are just starting out, you got this.
            </motion.p>

            <motion.div className={styles.socialProof} variants={itemVariants}>
              <div className={styles.avatars}>
                {avatars.map((url, i) => (
                  <motion.div 
                    key={i} 
                    className={styles.avatar}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <img src={url} alt="Member" />
                  </motion.div>
                ))}
              </div>
              <span className={styles.joinedCount}>
                <b>453+</b> joined the trybe.
              </span>
            </motion.div>

            <motion.div className={styles.actions} variants={itemVariants}>
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaPrimary}
              >
                Join the Waitlist <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaSecondary}
              >
                Explore Courses
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            className={styles.visualSide}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.globePlaceholder}>
              <motion.img 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png" 
                alt="3D Globe" 
                style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 80px rgba(34, 211, 238, 0.3))' }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HelloWorld;

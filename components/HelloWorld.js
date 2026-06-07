import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import styles from './HelloWorld.module.css';

const avatars = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg',
  'https://randomuser.me/api/portraits/men/5.jpg',
  'https://randomuser.me/api/portraits/women/6.jpg',
];

const HelloWorld = () => {
  return (
    <section id="hello-world" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.categoryTag}>
              <span className={styles.categoryLabel}>Career Platform</span>
              <span className={styles.newBadge}>NEW</span>
            </div>
            
            <div className={styles.titleWrapper}>
              <div className={styles.title}>
                <span className={styles.helloText}>HELLO</span>
                <div className={styles.worldText}>
                  WORLD
                  <div className={styles.masks}>
                    <span>🎭</span>
                  </div>
                </div>
              </div>
            </div>

            <p className={styles.description}>
              We do not do <b>&quot;apply and pray&quot;</b>, We track <b>freshly funded startups</b>, 
              sniff out what they actually need, and our AI hands you a roadmap 
              with proof-of-work to get that job. Your projects, challenges, and 
              Trybe courses <b>do the talking</b> — no cover letter bs needed. Even if 
              you are just starting out, you got this.
            </p>

            <div className={styles.socialProof}>
              <div className={styles.avatars}>
                {avatars.map((url, i) => (
                  <div key={i} className={styles.avatar}>
                    <Image src={url} alt="Member" width={40} height={40} />
                  </div>
                ))}
              </div>
              <span className={styles.joinedCount}>
                <b>453+</b> joined the trybe.
              </span>
            </div>

            <div className={styles.actions}>
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={styles.ctaPrimary}
              >
                Join the Waitlist <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                whileTap={{ scale: 0.98 }}
                className={styles.ctaSecondary}
              >
                Explore Courses
              </motion.button>
            </div>
          </div>

          <div className={styles.visualSide}>
            {/* 3D Globe would go here - using a high-quality placeholder for now */}
            <div className={styles.globePlaceholder}>
              <motion.img 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png" 
                alt="3D Globe" 
                style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 50px rgba(34, 211, 238, 0.2))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloWorld;

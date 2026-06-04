import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './PlayAndLearn.module.css';

const activities = [
  {
    title: "Saturday X Spaces",
    time: "8 PM WAT",
    description: "Join Gozie and the Trybe every Saturday to discuss AI, Web3, and the future of tech.",
    color: "#22D3EE" // Neon Cyan
  },
  {
    title: "Game Nights",
    time: "Regularly",
    description: "Unwind and bond with fellow geeks. Because a normal life is boring.",
    color: "#A855F7" // Electric Purple
  },
  {
    title: "Active Debugging",
    time: "24/7",
    description: "Get real-time help on your projects from seniors and peers in the community.",
    color: "#6B21A8" // Primary Purple
  },
  {
    title: "Hackathons",
    time: "Quarterly",
    description: "Build and scale your 'Hello World' concepts into real startups with community backing.",
    color: "#FFFFFF" // Pure White
  }
];

const PlayAndLearn = () => {
  return (
    <section id="events" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.content}
          >
            <h2 className={styles.title}>
              Play, Learn, <br />
              <span className="serif">& Build Together.</span>
            </h2>
            <p className={styles.description}>
              The Sarcastic Geeks Trybe is more than a job matching platform. 
              It's a "Proof of Community" where building agentic systems and 
              collaborative debugging is the vibe.
            </p>
            
            <div className={styles.imageOverlay}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={styles.imageContainer}
              >
                <Image 
                  src="https://sarcasticgeeks.com/images/trybe-trio.jpg" 
                  alt="Trybe Members" 
                  width={500} 
                  height={350} 
                  className={styles.trybeImage}
                />
                <div className={styles.imageGlow} />
              </motion.div>
            </div>

            <div className={styles.focus}>
              <h3>Core Focus:</h3>
              <div className={styles.tags}>
                <span className="glass">Agentic Systems</span>
                <span className="glass">AI + Blockchain</span>
                <span className="glass">Web3 Dev</span>
              </div>
            </div>
          </motion.div>

          <div className={styles.activitiesGrid}>
            {activities.map((act, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: -2,
                  translateZ: 20
                }}
                className={`${styles.actCard} glass`}
              >
                <div className={styles.actHeader}>
                  <span className={styles.actTitle}>{act.title}</span>
                  <span className={styles.actTime} style={{ color: act.color }}>{act.time}</span>
                </div>
                <p className={styles.actDescription}>{act.description}</p>
                <div className={styles.cardGlow} style={{ background: act.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayAndLearn;

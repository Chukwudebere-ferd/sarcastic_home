import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Search, Map, Handshake } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: "01",
    title: "Build Your Profile",
    description: "Build Your Profile (GitHub/Stack). Link your GitHub, add your stack, and showcase your Trybe projects.",
    icon: <User size={32} />
  },
  {
    number: "02",
    title: "AI Sniffs Out Fresh Roles",
    description: "AI Sniffs Out Fresh Roles (Real-time tracking). We track newly funded startups in real-time.",
    icon: <Search size={32} />
  },
  {
    number: "03",
    title: "Bez AI Builds Your Roadmap",
    description: "Bez AI Builds Your Roadmap (Market-driven). Our algorithm tracks freshly funded projects — then crafts job requirements.",
    icon: <Map size={32} />
  },
  {
    number: "04",
    title: "Apply with Community Backing",
    description: "Apply with Community Backing. Leverage the power of the Sarcastic Geeks Trybe network to get warm referrals.",
    icon: <Handshake size={32} />
  }
];

const HowItWorks = () => {
  return (
    <section id="roadmap" className={styles.section}>
      <div className={styles.backgroundVisual}>
        <Image 
          src="https://sarcasticgeeks.com/images/connect.jpg" 
          alt="Connectivity" 
          width={1200} 
          height={600} 
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.header}
        >
          <h2 className={styles.title}>How it <span className="serif">works.</span></h2>
          <p className={styles.subtitle}>A simplified journey from community member to hired engineer.</p>
        </motion.div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`${styles.card} glass`}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

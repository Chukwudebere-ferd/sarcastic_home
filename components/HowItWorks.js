import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Search, Map, Handshake } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: "01",
    title: "Build Your Profile",
    description: "Link your GitHub, add your stack, and showcase your Trybe projects. This becomes your proof of work that speaks louder than any CV.",
    icon: <User size={32} />
  },
  {
    number: "02",
    title: "AI Sniffs Out Fresh Roles",
    description: "We track newly funded startups in real-time. When they post roles, our AI crafts requirements based on what they actually need.",
    icon: <Search size={32} />
  },
  {
    number: "03",
    title: "Bez AI Builds Your Roadmap",
    description: "Our algorithm tracks freshly funded projects in real-time — then crafts job requirements based on what that funding actually needs.",
    icon: <Map size={32} />
  },
  {
    number: "04",
    title: "Apply with Community Backing",
    description: "Leverage the power of the Sarcastic Geeks Trybe network to get warm referrals and direct access to hiring managers.",
    icon: <Handshake size={32} />
  }
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundVisual}>
        <Image 
          src="https://sarcasticgeeks.com/images/connect.jpg" 
          alt="Connectivity" 
          width={1200} 
          height={600} 
          className={styles.bgImage}
        />
      </div>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>How it <span className="serif">works.</span></h2>
          <p className={styles.subtitle}>A simplified journey from community member to hired engineer.</p>
        </motion.div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${styles.card} glass`}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.icon}>{step.icon}</div>
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

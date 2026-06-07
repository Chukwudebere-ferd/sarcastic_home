import { motion } from 'framer-motion';
import { MousePointer2, Code2, Users, Rocket } from 'lucide-react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MousePointer2 size={32} />,
      title: "Build Your Profile",
      description: "Connect your GitHub and Stack Overflow to build your geek identity."
    },
    {
      icon: <Code2 size={32} />,
      title: "AI Sniffs Out Roles",
      description: "Our AI tracks freshly funded startups to find roles before they go public."
    },
    {
      icon: <Users size={32} />,
      title: "Bez AI Roadmap",
      description: "Get a market-driven roadmap and build proof-of-work that startups want."
    },
    {
      icon: <Rocket size={32} />,
      title: "Community Backing",
      description: "Apply to roles with the full support and referrals of the Trybe."
    }
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>How it Works</h2>
          <p className={styles.subtitle}>Your journey from geek to pro in four simple steps.</p>
        </motion.div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, borderColor: 'var(--brand-cyan)' }}
            >
              <span className={styles.stepNumber}>0{i + 1}</span>
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
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

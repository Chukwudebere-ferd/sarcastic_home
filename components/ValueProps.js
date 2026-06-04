import { motion } from 'framer-motion';
import { Target, FolderOpen, Globe, Sparkles, Brain } from 'lucide-react';
import styles from './ValueProps.module.css';

const benefits = [
  {
    title: "AI-Matched Opportunities",
    description: "Our system reads your profile, stack, and goals to surface roles that actually fit — not just keyword matches.",
    icon: <Target size={24} />
  },
  {
    title: "Proof of Work Portfolio",
    description: "Every project, challenge, and course you complete in the Trybe becomes evidence. Your profile speaks before you do.",
    icon: <FolderOpen size={24} />
  },
  {
    title: "Global + Remote First",
    description: "Remote roles from Africa, Europe, and beyond. We connect Nigerian tech talent with the world.",
    icon: <Globe size={24} />
  },
  {
    title: "Community Referrals",
    description: "Trybe seniors refer you directly. A warm referral from a trusted geek beats a cold application every time.",
    icon: <Sparkles size={24} />
  },
  {
    title: "Interview Prep Engine",
    description: "Bez AI builds you a tailored prep roadmap the moment a job matches your profile. Walk in ready.",
    icon: <Brain size={24} />
  }
];

const ValueProps = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>What You <span className="serif">Get.</span></h2>
        </motion.div>
        <div className={styles.grid}>
          {/* Main Large Card for Cowries */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${styles.mainCard} glass`}
          >
            <div className={styles.coinContainer}>
              <motion.div 
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotateY: { duration: 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className={styles.coin}
              >
                <div className={styles.coinFront}>C</div>
                <div className={styles.coinBack}>C</div>
              </motion.div>
              <div className={styles.coinShadow} />
            </div>
            <h2 className={styles.mainTitle}>Cowrie-Backed Applications</h2>
            <p className={styles.mainDescription}>
              Spend <strong>Cowries</strong> (community currency) to boost your visibility 
              to hiring companies and unlock premium listing access. 
              Earn them by contributing to the Trybe.
            </p>
          </motion.div>

          {/* Secondary Grid for other benefits */}
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className={`${styles.benefitCard} glass`}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

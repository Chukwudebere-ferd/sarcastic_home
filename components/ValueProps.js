import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import styles from './ValueProps.module.css';

const ValueProps = () => {
  const benefits = [
    {
      icon: <Target size={24} />,
      title: "AI-Matched Opportunities",
      description: "Our AI maps your actual proof-of-work to the technical needs of funded startups."
    },
    {
      icon: <Zap size={24} />,
      title: "Cowrie-Backed Apps",
      description: "Apply with community backing and referrals that carry actual weight."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Verified Portfolio",
      description: "A proof-of-work portfolio that actually does the talking for you."
    }
  ];

  return (
    <section id="value-props" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Why Sarcastic Geeks?</h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.mainCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.coinContainer}>
              <motion.div 
                className={styles.coin}
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className={styles.coinFront}>$</div>
              </motion.div>
            </div>
            <h3 className={styles.mainTitle}>Cowrie Rewards</h3>
            <p className={styles.mainDescription}>
              Earn Cowries by solving real-world challenges and contributing to the Trybe.
            </p>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i} 
                className={styles.benefitCard}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ x: 10, borderColor: 'var(--brand-cyan)' }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
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

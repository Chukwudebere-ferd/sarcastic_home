import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const stats = [
  { label: "Trybe Members", value: "0+" },
  { label: "Real Project Data", value: "100%" },
  { label: "Powered Roadmaps", value: "AI" }
];

const Stats = () => {
  return (
    <div className={styles.statsBar}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={styles.statItem}
          >
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

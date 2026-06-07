import { motion } from 'framer-motion';
import styles from './Stats.module.css';

const Stats = () => {
  const stats = [
    { value: '5K+', label: 'Active Geeks' },
    { value: '120+', label: 'Projects Built' },
    { value: '15+', label: 'Countries' },
    { value: '24/7', label: 'Discord Support' }
  ];

  return (
    <div className={styles.statsBar}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className={styles.value}
              whileHover={{ scale: 1.1, color: '#fff' }}
            >
              {stat.value}
            </motion.span>
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;

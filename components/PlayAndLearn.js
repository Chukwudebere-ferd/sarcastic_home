import { motion } from 'framer-motion';
import { Calendar, Gamepad2, Laptop, MessageSquare } from 'lucide-react';
import styles from './PlayAndLearn.module.css';

const PlayAndLearn = () => {
  const activities = [
    {
      icon: <Calendar size={24} />,
      title: "Saturday X Spaces",
      time: "8 PM WAT",
      description: "Weekly community deep dives into tech trends and geek culture."
    },
    {
      icon: <Gamepad2 size={24} />,
      title: "Game Nights",
      time: "Bi-Weekly",
      description: "Unwind and bond with the trybe over competitive gaming sessions."
    },
    {
      icon: <Laptop size={24} />,
      title: "Active Debugging",
      time: "On-demand",
      description: "Real-time collaborative debugging sessions to squash bugs with the Trybe."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Code Review",
      time: "Daily",
      description: "Peer-to-peer feedback sessions to level up your engineering game."
    }
  ];

  return (
    <section id="play-and-learn" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.focus}>
              <h3>Agentic Systems Focus</h3>
            </div>
            <h2 className={styles.title}>Play & <br /><span className="serif">Learn.</span></h2>
            <p className={styles.description}>
              From AI Agents to Blockchain. Beyond the code, we are a family. 
              Saturday X Spaces (8 PM WAT), Game Nights, and Active Debugging.
            </p>
            <div className={styles.tags}>
              <span>#GeekCulture</span>
              <span>#LearnByDoing</span>
              <span>#TrybeVibes</span>
            </div>
          </motion.div>

          <div className={styles.activitiesGrid}>
            {activities.map((act, i) => (
              <motion.div 
                key={i} 
                className={styles.actCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, borderColor: 'var(--brand-cyan)' }}
              >
                <div className={styles.actHeader}>
                  <div style={{ color: 'var(--brand-cyan)' }}>{act.icon}</div>
                  <span className={styles.actTime}>{act.time}</span>
                </div>
                <h3 className={styles.actTitle}>{act.title}</h3>
                <p className={styles.actDescription}>{act.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayAndLearn;

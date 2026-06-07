import { motion } from 'framer-motion';
import styles from './TargetAudience.module.css';

const TargetAudience = () => {
  const personas = [
    {
      name: "The Builder",
      role: "Software Engineer",
      image: "https://sarcasticgeeks.com/images/godwin.png",
      description: "Focused on shipping high-quality code and validating their skills through proof-of-work."
    },
    {
      name: "The Visionary",
      role: "Product Designer",
      image: "https://sarcasticgeeks.com/images/morgan.png",
      description: "Crafting beautiful interfaces and user experiences that push geek culture forward."
    },
    {
      name: "The Strategist",
      role: "Tech Lead",
      image: "https://sarcasticgeeks.com/images/enugu.png",
      description: "Mentoring the next generation of geeks and coordinating complex community projects."
    }
  ];

  return (
    <section id="target-audience" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Who is the Trybe for?</h2>
          <p className={styles.subtitle}>A home for every type of geek.</p>
        </motion.div>

        <div className={styles.grid}>
          {personas.map((persona, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, background: 'rgba(34, 211, 238, 0.03)' }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={persona.image} 
                  alt={persona.name} 
                  className={styles.image}
                />
              </div>
              <h3 className={styles.name}>{persona.name}</h3>
              <span className={styles.role}>{persona.role}</span>
              <p className={styles.description}>{persona.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

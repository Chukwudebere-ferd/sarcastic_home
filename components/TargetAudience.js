import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TargetAudience.module.css';

const personas = [
  {
    name: "Fresh Graduates",
    role: "Bootcamp Completers",
    description: "Build credible proof of work from day one. No years of experience? No problem.",
    image: "https://sarcasticgeeks.com/images/morgan.png"
  },
  {
    name: "Mid-Level Engineers",
    role: "Looking to level up",
    description: "Get matched to roles in funded startups that actually match your growth path.",
    image: "https://sarcasticgeeks.com/images/godwin.png"
  },
  {
    name: "Designers & PMs",
    role: "Tech Creatives",
    description: "A community for everyone in tech. Connect with engineers and build real products.",
    image: "https://sarcasticgeeks.com/images/enugu.png"
  },
  {
    name: "Career Switchers",
    role: "Transitioning to Tech",
    description: "Follow a tailored AI-generated roadmap to pivot into your first tech role.",
    image: "https://sarcasticgeeks.com/images/eche2.png"
  }
];

const TargetAudience = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>Who is <span className="serif">Hello World for?</span></h2>
          <p className={styles.subtitle}>Tailored paths for every stage of your tech journey.</p>
        </motion.div>

        <div className={styles.grid}>
          {personas.map((persona, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${styles.card} glass`}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={persona.image} 
                  alt={persona.name} 
                  width={200} 
                  height={200} 
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{persona.name}</h3>
                <span className={styles.role}>{persona.role}</span>
                <p className={styles.description}>{persona.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

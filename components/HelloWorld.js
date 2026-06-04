import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import styles from './HelloWorld.module.css';

const HelloWorld = () => {
  return (
    <section id="hello-world" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.content}
          >
            <h2 className={styles.title}>Hello World <span className="serif">flips the job hunt.</span></h2>
            <p className={styles.description}>
              Built inside the Sarcastic Geeks Trybe, we match you to roles shaped by actual funded projects — 
              then generate a detailed roadmap with recommended proof-of-work to get there.
            </p>
            <div className={styles.beginnerBadge}>
              <span className={styles.icon}><Zap size={16} fill="currentColor" /></span>
              <span>Perfect for Beginners: No years of experience needed. Just a stack, a project, and a Trybe.</span>
            </div>
            <button className={`${styles.cta} clipped-corner neon-glow`}>
              Try Hello World
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${styles.terminal} glass`}
          >
            <div className={styles.terminalHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.terminalTitle}>bez-ai.sh</div>
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.line}><span className={styles.prompt}>$</span> run hello-world --stack="Next.js, AI"</p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={styles.line}
              >
                <span className={styles.success}>[SUCCESS]</span> Found 12 freshly funded startups matching your stack.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className={styles.line}
              >
                <span className={styles.info}>[AI]</span> Generating Proof-of-Work roadmap...
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className={styles.roadmap}
              >
                <div className={styles.roadmapItem}>1. Build Agentic Chat Interface</div>
                <div className={styles.roadmapItem}>2. Integrate Vercel AI SDK</div>
                <div className={styles.roadmapItem}>3. Community Review (Pending)</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelloWorld;

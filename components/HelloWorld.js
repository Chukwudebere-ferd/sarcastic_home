import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';
import styles from './HelloWorld.module.css';

const HelloWorld = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="hello-world" ref={ref} className={styles.section}>
      <motion.div 
        style={{ scale, opacity }}
        className={styles.container}
      >
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Hello World <span className="serif">flips the job hunt.</span></h2>
            <p className={styles.description}>
              Built inside the Sarcastic Geeks Trybe, we match you to roles shaped by actual funded projects — 
              then generate a detailed roadmap with recommended proof-of-work to get there.
            </p>
            <div className={styles.toolFeatures}>
              <div className={styles.feature}>
                <Zap size={18} className={styles.icon} />
                <span>AI Prompting Interface</span>
              </div>
              <div className={styles.feature}>
                <Zap size={18} className={styles.icon} />
                <span>Environment Verification</span>
              </div>
              <div className={styles.feature}>
                <Zap size={18} className={styles.icon} />
                <span>Remixable Snippets</span>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.cta} clipped-corner`}
            >
              Try Hello World
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                transition={{ delay: 0.5 }}
                className={styles.line}
              >
                <span className={styles.success}>[SUCCESS]</span> Found 12 freshly funded startups matching your stack.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className={styles.line}
              >
                <span className={styles.info}>[AI]</span> Generating Proof-of-Work roadmap...
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className={styles.roadmap}
              >
                <div className={styles.roadmapItem}>1. Build Agentic Chat Interface</div>
                <div className={styles.roadmapItem}>2. Integrate Vercel AI SDK</div>
                <div className={styles.roadmapItem}>3. Community Review (Pending)</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HelloWorld;

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.navbar} glass`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="https://sarcasticgeeks.com/logo.png" 
            alt="Sarcastic Geeks Logo" 
            width={40} 
            height={40}
          />
          <span className="serif">Sarcastic Geeks</span>
        </Link>

        <div className={styles.links}>
          <Link href="#trybe">The Trybe</Link>
          <Link href="#hello-world">Hello World</Link>
          <Link href="#events">Events</Link>
          <Link href="#roadmap">Roadmap</Link>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${styles.cta} clipped-corner neon-glow`}
        >
          Join the Trybe
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

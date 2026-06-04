import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${styles.navbar} glass`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Image 
              src="https://sarcasticgeeks.com/logo.png" 
              alt="Sarcastic Geeks Logo" 
              width={32} 
              height={32}
              className={styles.logoImage}
            />
          </div>
          <span className="serif">Sarcastic Geeks</span>
        </Link>

        <div className={styles.links}>
          <Link href="#trybe">The Trybe</Link>
          <Link href="#hello-world">Hello World</Link>
          <Link href="#events">Events</Link>
          <Link href="#roadmap">Roadmap</Link>
        </div>

        <motion.button 
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className={`${styles.cta} clipped-corner`}
        >
          Join Sarcastic Geeks Trybe
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

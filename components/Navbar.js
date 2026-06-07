import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="https://sarcasticgeeks.com/logo.png" 
            alt="Sarcastic Geeks Logo" 
            width={40} 
            height={40}
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.links}>
          <Link href="#trybe">The Trybe</Link>
          <Link href="#hello-world">Hello World</Link>
          <Link href="#events">Events</Link>
          <Link href="#roadmap">Roadmap</Link>
        </div>

        <motion.button 
          whileHover={{ borderColor: 'var(--brand-cyan)', color: 'var(--brand-cyan)' }}
          whileTap={{ scale: 0.98 }}
          className={styles.accountBox}
        >
          Join Sarcastic Geeks Trybe
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;

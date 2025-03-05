'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import styles from './scrollToTop.module.scss';

const ScrollToTop = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;

      setProgress(percentage);
      setVisible(scrollTop > 100);
    };

    const handleScroll = () => window.requestAnimationFrame(updateScroll);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.scrolltotop}>
      <motion.div
        className={styles.scrollContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
      >
        <svg className={styles.progressBackground} viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="gray"
            strokeWidth="0"
            opacity="0.2"
          />
          <motion.circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - progress}
            transform="rotate(-90 18 18)"
            transition={{ duration: 0.2 }}
          />
        </svg>

        <div className={styles.scrollButton}>
          <ChevronUp className={styles.icon} />
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollToTop;

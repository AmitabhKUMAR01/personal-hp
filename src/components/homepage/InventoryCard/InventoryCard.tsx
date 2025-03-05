'use client';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
// import Lenis from "@studio-freight/lenis";
import styles from './inventoryCard.module.scss';
import Card from './Card/Card';
import { inventoryData } from '@/constants';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  const containerHeight = `${inventoryData.length * 150}vh`;

  return (
    <main
      ref={containerRef}
      className={styles.main}
      style={{ height: containerHeight }}
    >
      <Card projects={inventoryData} scrollProgress={scrollYProgress} />
    </main>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './Box.module.scss';
import { BoxesProps } from '@/types';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export const Boxes: React.FC<BoxesProps> = ({ img, num, text }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boxRef} className={styles.box}>
      <div className={styles.boxInside}>
        <div className={styles.imgContainer}>
          <Image
            width={90}
            height={90}
            src={img}
            alt="Icon"
            className={styles.icon}
          />
        </div>
        <div className={styles.counter}>
          {startAnimation ? (
            <CountUp start={0} end={num} duration={2} separator=",">
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          ) : (
            <span>0</span>
          )}
          <span>+</span>
        </div>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};

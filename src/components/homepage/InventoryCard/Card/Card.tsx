/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { motion, useTransform, useSpring, MotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import styles from './card.module.scss';
import Button from '@/components/ui/Button';

interface Project {
  title: string;
  Downloads: string;
  img: StaticImageData;
}

interface CardProps {
  projects: Project[];
  scrollProgress: MotionValue<number>;
}

export default function Card({ projects, scrollProgress }: CardProps) {
  const indexMotionValue = useTransform(
    scrollProgress,
    [0, 1],
    [0, projects.length - 1]
  );
  const smoothIndex = useSpring(indexMotionValue, {
    stiffness: 200,
    damping: 30,
  });

  const opacityValues = projects.map((_, index) =>
    useTransform(smoothIndex, (latest) =>
      Math.abs(latest - index) < 0.5 ? 1 : 0
    )
  );

  const yValues = projects.map((_, index) =>
    useTransform(
      smoothIndex,
      (latest) => `${Math.max(0, (index - latest) * 100)}%`
    )
  );

  return (
    <motion.div className={styles.pinnedCard}>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* Text Section */}
          <div className={styles.leftwrapper}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.motionLeft}
                style={{ opacity: opacityValues[index] }}
              >
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.result}>Results</p>
                <div className={styles.content}>
                  <div className={styles.sub}>
                    <h2>30%</h2>
                    <p>Higher Conversion</p>
                  </div>
                  <div className="h-full w-1 bg-gray-700"></div>
                  <div className={styles.sub}>
                    <h2>{project.Downloads}K+</h2>
                    <p>Apps Downloads</p>
                  </div>
                </div>
                <div className={styles.button}>
                  <Button title="View Portfolio" size="xl" borderRadius="xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.right}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                y: yValues[index],
                backgroundColor: 'white',
                height: '90vh',
              }}
              className={styles.motionRight}
            >
              <Image
                src={project.img}
                alt="project image"
                quality={100}
                className={styles.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

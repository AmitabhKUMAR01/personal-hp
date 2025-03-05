import React from 'react';
import styles from './kickStart.module.scss';
import { Button } from '@/components/index';

const title = 'Kickstart Your Dream Project With Us';
const text =
  'We have worked with some of the best innovative ideas and brands in the world across industries.';

const KickStart = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <Button title="Initiate a Partnerhip" size="xl" borderRadius="md" />
        </div>
      </div>
    </div>
  );
};

export default KickStart;

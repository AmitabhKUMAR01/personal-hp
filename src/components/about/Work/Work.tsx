import React from 'react';
import { HowWeWorkSvg } from './HowWeWorkSvg';
import styles from './work.module.scss';

const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.svgImg}>
        <h2> How We Work </h2>
        <HowWeWorkSvg />
      </div>
    </div>
  );
};
export default Work;

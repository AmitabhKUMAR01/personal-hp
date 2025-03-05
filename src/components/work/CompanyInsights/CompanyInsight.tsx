import { ShowMore } from '../../index';
import { ImagesArray } from '@/constants';
import Image from 'next/image';
import React from 'react';
import styles from './Company.module.scss';

const CompanyInsight1 = () => {
  return (
    <div className={styles.companyContainer}>
      {ImagesArray.map((insight, index) => (
        <div key={index} className={styles.companyItem}>
          {/* Image Section */}
          <div
            className={`${styles.imageContainer} ${index % 2 === 0 ? styles.gradientLeft : styles.gradientRight}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={insight.image}
                alt={insight.title}
                quality={100}
                className={styles.image}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className={styles.textContainer}>
            <h2>{insight.title}</h2>
            <ShowMore text={insight.description} maxLength={300} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyInsight1;

import React from 'react';
import { CareerBusiness } from './CareerBusiness';
import { SubmitResume } from './SubmitResume';
import styles from './carrer.module.scss';

export const CareerPage = () => {
  return (
    <div className={styles.career}>
      <CareerBusiness />
      <SubmitResume />
    </div>
  );
};

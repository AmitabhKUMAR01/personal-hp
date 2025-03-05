'use client';
import styles from './ContactPortfolio.module.scss';
import { ButtonWithArrow } from '@/components/index';

export const ContactPortfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <h1 className={styles.heading}>
            Got a startup idea & need to get it validated
          </h1>

          <ButtonWithArrow
            text="Consult Our Experts"
            link="/contact"
            textcolor="black"
          />
        </div>
      </div>
    </div>
  );
};

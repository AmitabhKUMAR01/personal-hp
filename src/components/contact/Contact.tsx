import React from 'react';

import { ContactPortfolio } from './ContactPortfolio';
import { ContactMap } from './ContactMap';
import styles from './Contact.module.scss';
import Card from './Card/Card';
import { ScrollToTop } from '@/components/index';

export const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container1}>
          <Card />
        </div>
        <ContactPortfolio />
        <ContactMap />
      </div>
      <ScrollToTop />
    </>
  );
};

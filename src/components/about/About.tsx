import React from 'react';
import styles from './about.module.scss';
import { Work, BusinessPartner, CompanyInsight } from '@/components/index';

const AboutPage = () => {
  return (
    <div className="">
      <div className={styles.about}>
        <CompanyInsight />
        <div className={styles.work}>
          <Work />
        </div>
      </div>
      <div className={styles.aboutBusiness}>
        <BusinessPartner />
      </div>
    </div>
  );
};
export default AboutPage;

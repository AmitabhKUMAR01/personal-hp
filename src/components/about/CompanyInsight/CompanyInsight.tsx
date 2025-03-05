'use client';

import Image from 'next/image';
import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { InsightData } from '@/constants';
import ShowMore from '@/components/common/Button/ShowMore/ShowMore';
import ButtonWithArrow from '@/components/common/Button/ButtonWithArrow/ButtonWithArrow';
import styles from './companyInsight.module.scss';

const CompanyInsight = () => {
  const onlyWidth = useWindowWidth();
  const calculateMaxLength = () => {
    const maxLength =
      onlyWidth <= 800 && onlyWidth > 500 ? 200 : onlyWidth <= 1024 ? 400 : 500;
    return maxLength;
  };

  return (
    <div className={styles.companyInsight}>
      <div className={styles.imgs}>
        <Image
          src="https://hp.thepandasolutions.com/websiteAssets/about/CompanyInsight.png"
          alt="about-image"
          width={600}
          height={600}
        />
      </div>
      <div className={styles.heading}>
        <h1>
          About Our <br /> Company Insight
        </h1>
        <div className={styles.data}>
          <ShowMore
            text={InsightData[0].textContent}
            maxLength={calculateMaxLength()}
          />
        </div>

        <div className={styles.text}>
          <ButtonWithArrow
            text="Start New Project"
            link="/calculator"
            textcolor="black"
          />
        </div>
      </div>
    </div>
  );
};
export default CompanyInsight;

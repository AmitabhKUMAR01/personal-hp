import React from 'react';
import styles from './BusinessPartner.module.scss';
import { Boxes } from './Boxes';
import { companyData, boxData } from '@/constants';
import ButtonWithArrow from '@/components/common/Button/ButtonWithArrow/ButtonWithArrow';

const BusinessPartner = () => {
  return (
    <div className={styles.businessPartner}>
      <div className={styles.opacityBg} />
      <div className={styles.heading}>
        <h2>
          The Best Digital Partner <br /> Your Business Can Have
        </h2>

        <p>{companyData[0].msg}</p>

        <ButtonWithArrow text="Start New Project" link="/calculator" />
      </div>

      <div className={styles.boxes}>
        {boxData.map((item) => (
          <div key={item.id} className={styles.box}>
            <Boxes
              key={item.id}
              img={item.image.src}
              num={item.nums}
              text={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BusinessPartner;

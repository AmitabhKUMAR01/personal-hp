import React from 'react';
import styles from './chooseUs.module.scss';
import { ChooseUsData } from '@/constants';
import Image from 'next/image';

const WhyChooseUs =
  'In today’s time, when every business is making a move towards digitization, it has become imperative to have a technology partner who will take your business to new heights of success. Whether you want to create a functional and aesthetically pleasing website or need a comprehensive digital solution, we’ve got your back! HangingPanda is an established mobile and web app development company. Here, we will work closely with you to give shape to your ideas and transform them digitally. When your idea meets our expertise, we become unstoppable together.';

const ChooseUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <p className={styles.para}>{WhyChooseUs}</p>
        <div className={styles.divContainer}>
          <div className={styles.left}>
            <Image
              src="https://hp.thepandasolutions.com/websiteAssets/home/hpbackground.webp"
              alt=""
              height={600}
              width={600}
            />
          </div>
          <div className={styles.right}>
            {ChooseUsData.map((data, index) => {
              const { icon: SvgIcon } = data;
              return (
                <div key={index} className={styles.content}>
                  <div className={styles.image}>
                    <SvgIcon />
                  </div>
                  <h2 className={styles.cardtitle}>{data.title}</h2>
                  <p className={styles.cardpara}>{data.cardpara}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;
// checking

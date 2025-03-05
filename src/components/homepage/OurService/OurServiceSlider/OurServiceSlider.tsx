'use client';
import React from 'react';
import { OurServiceSliderData } from '@/constants';
import Image from 'next/image';
import styles from './ourServiceSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const OurServiceSlider = () => {
  return (
    <section className={styles.wrapper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
          1201: { slidesPerView: 2.5 },
        }}
        className={styles.swiper}
      >
        {OurServiceSliderData.map(({ img, heading, para }, index) => (
          <SwiperSlide key={index} className={styles.serviceSlide}>
            <div className={styles.serviceSlider}>
              <Image
                src={img}
                alt={heading}
                width={400}
                height={400}
                priority
              />
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.para}>{para}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurServiceSlider;

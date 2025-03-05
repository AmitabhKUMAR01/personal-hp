'use client';
import { FrameworkImages } from '@/constants';
import styles from './frameworkslider.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const FrameworkSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {FrameworkImages.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            breakpoints={{
              320: { slidesPerView: 3 },
              550: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
              1201: { slidesPerView: 8 },
            }}
            slidesPerView={8}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {FrameworkImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.frameworkslider}>
                  <div className={styles.images}>
                    <Image
                      className={styles.img}
                      src={image.imageUrl}
                      alt={image.name}
                      height={90}
                      width={90}
                    />
                    <h2 className={styles.heading}>{image.name}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Loading features...</p>
        )}
      </div>
    </div>
  );
};
export default FrameworkSlider;

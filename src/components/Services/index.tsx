'use client';

import React, { useState } from 'react';
import { servicesData } from '@/constants';
import styles from './services.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FrameworkSlider, ButtonWithArrow } from '@/components/index';

interface ServicesProps {
  name: keyof typeof servicesData;
}

const Services: React.FC<ServicesProps> = ({ name }) => {
  // Extracting data safely
  const { appD, offers, developmentProcess } = servicesData[name] || {
    developmentProcess: null,
    appD: [],
    offers: {
      title: '',
      description: '',
      image: '',
    },
  };

  // State to track expanded descriptions
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    appD.map(() => false)
  );

  // Toggle description expand/collapse
  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => {
      const newExpandedItems = [...prev];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  // Slider settings
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    className: 'slider-item',
    responsive: [
      {
        breakpoint: 1441, // At 1440px and below, show 4 slides
        settings: { slidesToShow: 4 },
      },

      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const bgColors = [
    'bg-[#e6eef6]',
    'bg-[#fef3e4]',
    'bg-[#e0f5f1]',
    'bg-[#e5f5fb]',
    'bg-[#feeee5]',
    'bg-[#feebf0]',
    'bg-[#f1e8f3]',
    'bg-[#e0f2f5]',
    'bg-[#efe7fb]',
  ];

  return (
    <>
      <div className={styles.services}>
        <FrameworkSlider />
        {appD?.map((item, index) => (
          <div key={item?.id} className={styles.mainContainer}>
            <div className={`${index % 2 === 0 ? 'md:order-last' : ''}`}>
              <motion.div>
                <div className={styles.imgContainer}>
                  <img
                    src={item?.image}
                    alt={item.title}
                    className={`absolute h-240 w-[370px] transition-all duration-700 ease-in-out hover:top-0 lg:h-[292px] lg:w-[380px] xl:h-[425px] xl:w-[550px] 2xl:h-540 2xl:w-700 ${
                      index % 2 === 0
                        ? '-top-4 left-4 hover:left-0'
                        : '-top-4  right-4 hover:right-0'
                    }`}
                  />
                </div>
              </motion.div>
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.contentHeading}>{item?.title}</h2>
              <h2 className={styles.contentHeadings}>{item?.subtitle}</h2>

              <p className={styles.para}>
                {expandedItems[index]
                  ? item.description
                  : item.description.slice(0, 220)}
                {item.description.length > 400 && (
                  <span
                    onClick={() => toggleExpand(index)}
                    className={styles.span}
                  >
                    {expandedItems[index] ? 'Read Less' : 'Read More'}
                  </span>
                )}
              </p>
              {item.buttonText && (
                <ButtonWithArrow text={item.buttonText} link="" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Offers Section */}
      <div className={styles.offer}>
        <div className={styles.mainContainer}>
          <div>
            <h1 className={styles.contentHeading}>{offers?.title}</h1>
            <p className={styles.description}>{offers?.description}</p>
          </div>
          <div>
            <div className={styles.img}>
              <img src={offers?.image} alt="Offer" />
            </div>
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className={styles.processContainer}>
        <h1 className={styles.heading}>{developmentProcess?.heading}</h1>
        <div className={styles.sliderMainContainer}>
          <div className="slider-container">
            <Slider {...settings}>
              {developmentProcess?.title.map((elem, index) => (
                <div
                  key={index}
                  className={`relative h-290 rounded-t-3xl rounded-br-3xl ${
                    bgColors[index % bgColors.length]
                  }`}
                >
                  <div className={styles.gridContainer}>
                    <img
                      src={elem.image}
                      alt={elem.heading}
                      className={styles.img}
                    />
                    <h6 className={styles.title}>{elem.heading}</h6>
                  </div>
                  <p
                    className={`absolute bottom-0 right-2 text-64 font-semibold lg:text-52 xl:text-64`}
                    style={{ color: elem?.numberColor }}
                  >
                    {elem.number}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

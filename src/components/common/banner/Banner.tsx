'use client';
import React from 'react';
import styles from './banner.module.scss';
import { Navbar } from '@/components/index';
import { motion } from 'framer-motion';

import { usePathname } from 'next/navigation';
import { ButtonWithArrow } from '@/components/index';
import { bannerData } from '@/constants/index';
import { cn } from '@/utils/cn';
import Link from 'next/link';

import useScreenSize from '@/hooks/useScreen';
//  word delay inside home
const headingContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
const wordVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const gradientdata = [
  { path: 'home', gradient: 'bg-custom-gradient-home' },
  { path: 'about', gradient: 'bg-custom-gradient-about' },
  { path: 'our-work', gradient: 'bg-custom-gradient-our_work' },
  { path: 'blog', gradient: 'bg-custom-gradient-blogs' },
  { path: 'career', gradient: 'bg-custom-gradient-career' },
  { path: 'contact', gradient: 'bg-custom-gradient-contact' },
  { path: 'calculator', gradient: 'bg-custom-gradient-contact' },
  {
    path: 'services/appDevelopment',
    gradient: 'bg-custom-gradient-app-development',
  },
  {
    path: 'services/softwareDevelopement',
    gradient: 'bg-custom-gradient-software-development',
  },
  {
    path: 'services/webDesignDevelopement',
    gradient: 'bg-custom-gradient-web-design',
  },
  { path: 'services/brandingDesign', gradient: 'bg-custom-gradient-branding' },
  {
    path: 'services/digitalMarketing',
    gradient: 'bg-custom-gradient-digital-marketing',
  },
  { path: 'services/dialerSoftware', gradient: 'bg-custom-gradient-dialer' },
];
const Banner = () => {
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.replace('/', '');
  const { width } = useScreenSize();
  const banner =
    bannerData.find((item) => item.data === currentPage) || bannerData[0];
  const gradientvalue = gradientdata.find((item) => item.path == currentPage);
  const gradientClass = gradientvalue
    ? gradientvalue.gradient
    : gradientdata[0].gradient;

  return (
    <div
      className={cn(
        styles.main,
        currentPage == 'blog/blog_details' ? styles.blog_details : ''
      )}
      style={{
        backgroundImage:
          currentPage === 'blog/blog_details'
            ? 'none'
            : `url(${banner.backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {currentPage === 'blog/blog_details' ? (
        <div className="fixed left-0 top-0 z-50 w-full">
          <Navbar />
        </div>
      ) : (
        <div
          className={cn(
            styles.top,
            gradientClass,
            banner.data === 'blog' ? styles.blog : ''
          )}
        >
          <div className={styles.navbardiv}>
            <Navbar />
          </div>
          {/* <Navbar /> */}
          {currentPage !== 'blog/blog_details' && (
            <div className={styles.inner}>
              {banner.data == 'home' ? (
                <div className={styles.homecard}>
                  {/* Animated Heading */}
                  <motion.div
                    variants={headingContainer}
                    initial="hidden"
                    animate="visible"
                    className={styles.mainmotiondiv}
                  >
                    <motion.div
                      className={styles.linemotiondiv}
                      initial={{ width: 0 }}
                      animate={{ width: '57%' }}
                      transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        delay: 0.2,
                      }} // Delayed to appear after the first line
                    />
                    <motion.h1 className={styles.h1motiondiv}>
                      {banner.heading
                        .split(' ')
                        .slice(0, 5)
                        .map((word, i) => (
                          <span key={i}>
                            {word.split('').map((latter, j) => (
                              <motion.span key={j} variants={wordVariants}>
                                {latter}
                              </motion.span>
                            ))}
                          </span>
                        ))}
                    </motion.h1>
                    <motion.h1 className={styles.h2motiondiv}>
                      {banner.heading
                        .split(' ')
                        .slice(5, 9)
                        .map((word, i) => (
                          <span key={i}>
                            {word.split('').map((latter, j) => (
                              <motion.span key={j} variants={wordVariants}>
                                {latter}
                              </motion.span>
                            ))}
                          </span>
                        ))}
                    </motion.h1>
                  </motion.div>
                  <motion.p
                    className={styles.motionpara}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, ease: 'easeOut', delay: 0 }} // Delay to show after h1
                  >
                    {width >= 1200
                      ? banner.bannerSubTitle
                      : banner.bannerSubTitle.slice(0, 62)}
                  </motion.p>
                  <motion.div
                    className={styles.motionbtn}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.1,
                      ease: 'easeOut',
                      delay: 0,
                    }} // Delay to show after h1
                  >
                    <ButtonWithArrow
                      text="Let's Talk"
                      link="/contact"
                      textcolor="white"
                    />
                  </motion.div>
                </div>
              ) : (
                <div
                  className={cn(
                    styles.blogmain,
                    banner.data === 'about' ? styles.about : '',
                    banner.data === 'our-work' ? styles.our_work : '',
                    banner.data === 'career' ? styles.career : '',
                    banner.data === 'calculator' ? styles.calculator : '',
                    banner.data === 'blog' ? styles.blog : '',
                    banner.data === 'contact' ? styles.contact : '',
                    banner.data === 'services/appDevelopment'
                      ? styles.appdevelopment
                      : '',
                    banner.data === 'services/softwareDevelopement'
                      ? styles.softwaredevelopment
                      : '',
                    banner.data === 'services/webDesignDevelopement'
                      ? styles.webdesign
                      : '',
                    banner.data === 'services/brandingDesign'
                      ? styles.banding
                      : '',
                    banner.data === 'services/digitalMarketing'
                      ? styles.digitalmarketing
                      : '',
                    banner.data === 'services/dialerSoftware'
                      ? styles.dialersoftware
                      : ''
                  )}
                >
                  <h1
                    className={cn(
                      styles.blogheading,
                      banner.data === 'about' ? styles.about : '',
                      banner.data === 'our-work' ? styles.our_work : '',
                      banner.data === 'career' ? styles.career : '',
                      banner.data === 'calculator' ? styles.calculator : '',
                      banner.data === 'blog' ? styles.blog : '',
                      banner.data === 'contact' ? styles.contact : '',
                      banner.data === 'services/appDevelopment'
                        ? styles.appdevelopment
                        : '',
                      banner.data === 'services/softwareDevelopement'
                        ? styles.softwaredevelopment
                        : '',
                      banner.data === 'services/webDesignDevelopement'
                        ? styles.webdesign
                        : '',
                      banner.data === 'services/brandingDesign'
                        ? styles.banding
                        : '',
                      banner.data === 'services/digitalMarketing'
                        ? styles.digitalmarketing
                        : '',
                      banner.data === 'services/dialerSoftware'
                        ? styles.dialersoftware
                        : ''
                    )}
                  >
                    {banner.heading}
                  </h1>
                  <p className={cn(styles.blogpara)}>{banner.bannerSubTitle}</p>
                  {banner?.showButton == true && (
                    <div className={styles.blogbtndiv}>
                      <span className={styles.bloganimation}></span>
                      <Link
                        href={banner?.link || ''}
                        className={styles.blogbtn}
                      >
                        Explore
                      </Link>
                    </div>
                  )}
                  {banner?.showButton == false && banner.data != 'contact' && (
                    <div className={styles.careerbtns}>
                      <button className={styles.btn}>Apply Now</button>
                      <button className={styles.btn}>View All Jobs</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;

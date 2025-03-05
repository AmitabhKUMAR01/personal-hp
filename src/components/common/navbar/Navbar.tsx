'use client';
import React, { useEffect, useRef, useState } from 'react';
// import Lottie from 'lottie-react';
import styles from './navbar.module.scss';
import { Blacklogosvg, Logosvg, hamburger } from '@/assets/nav_img/index';

import { RiArrowDownSFill } from 'react-icons/ri';

import { MdOutlineArrowDropDown } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { expertices } from '@/assets/services_img/index';
import { servicesMenuData, menudata } from '@/constants/index';
import { cn } from '@/utils/cn';
import dynamic from 'next/dynamic';
import useScreenSize from '@/hooks/useScreen';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimatedService {
  name: string;
  animation: boolean;
}
function Navbar() {
  const { width } = useScreenSize();
  const [model, setmodel] = useState(false);
  const [smalldata, setsmalldata] = useState(false);
  const [servicedata, setservicedata] = useState(false);
  const [animated, setAnimated] = useState<AnimatedService | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scroll, setscroll] = useState(false);
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.replace('/', '');
  const onMouseEnterHandle = (data: { name: string }) => {
    setAnimated({ name: data.name, animation: true });
  };
  const onMouseLevelHandle = (data: { name: string }) => {
    setAnimated({ name: data.name, animation: false });
  };
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setservicedata(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setservicedata(false), 100);
  };
  // in case scroll navbar changed
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (width <= 1280) {
      setservicedata(false);
    } else if (width >= 1280) {
      setmodel(false);
    }
  }, [width]);
  return (
    <>
      <nav
        className={cn(
          styles.main,
          servicedata
            ? 'bg-white text-black' // White background and black text when service menu is open
            : currentPage === 'blog/blog_details'
              ? scroll
                ? 'bg-white text-black'
                : 'bg-custom-gradient-blogdetails text-white'
              : scroll
                ? 'bg-white text-black'
                : 'bg-transparent text-white'
        )}
      >
        <div className={styles.inner}>
          <Link href="/">
            <div className={styles.imgdiv}>
              {scroll || servicedata ? <Blacklogosvg /> : <Logosvg />}
            </div>
          </Link>
          <div className={styles.btndiv}>
            <ul className={styles.btns}>
              {menudata.map((data, index) => (
                <li
                  key={index}
                  onMouseEnter={
                    data.name === 'SERVICES' ? handleMouseEnter : undefined
                  } // Apply onMouseEnter only to "services"
                  onMouseLeave={
                    data.name === 'SERVICES' ? handleMouseLeave : undefined
                  }
                >
                  {data.name == 'SERVICES' ? (
                    <ul>
                      <li className={styles.sbtn}>
                        {data.name} <RiArrowDownSFill />
                      </li>
                    </ul>
                  ) : (
                    <Link href={data?.path || '#'} className={styles.btn}>
                      {data.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/calculator" className={styles.costbtnmain}>
                  <button className={styles.costbtn}>
                    {' '}
                    <span className={styles.costspan}></span>
                    APP Cost Calculator
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <button className={styles.hamburger} onClick={() => setmodel(!model)}>
            <div className={styles.imgdiv}>
              <img
                src={hamburger.src}
                alt=""
                className={cn(
                  styles.himg,
                  scroll ? ' ' : 'brightness-0 invert-[1]'
                )}
              />
            </div>
          </button>
        </div>
        {model && (
          <div className={styles.model}>
            <div className={styles.top}>
              <Blacklogosvg />
              <IoMdClose
                className={styles.closebtn}
                onClick={() => setmodel(!model)}
              />
            </div>
            <ul className={styles.modeldetails}>
              {menudata.map((data, index) => (
                <li className={styles.modelbtn} key={index}>
                  {data.name === 'SERVICES' ? (
                    <button
                      onClick={() => setsmalldata(!smalldata)}
                      className={styles.servicebtn}
                    >
                      SERVICES{' '}
                      <span>
                        {smalldata ? (
                          <MdOutlineArrowDropUp />
                        ) : (
                          <MdOutlineArrowDropDown />
                        )}
                      </span>
                    </button>
                  ) : (
                    <Link href={data?.path || '#'}>{data.name}</Link>
                  )}
                  {data.name === 'SERVICES' && smalldata && (
                    <ul>
                      {servicesMenuData.map((data, index) => (
                        <li className={styles.smallmodelbtn} key={index}>
                          <Link href={data.link}>{data.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className={styles.modelbtn}>
                <button className={styles.modelcostbtn}>
                  {' '}
                  <span className={styles.modelspan}></span>
                  <Link href="/calculator">App Cost Calculator</Link>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {servicedata && (
        <div
          className={styles.servicemodel}
          onMouseEnter={() => {
            handleMouseEnter();
          }} // Ensure the model stays open
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.smodelleft}>
            {servicesMenuData.map((data, index) => (
              <div key={index} className={styles.card}>
                <div
                  className={styles.imgdiv}
                  onMouseEnter={() => onMouseEnterHandle(data)}
                  onMouseLeave={() => onMouseLevelHandle(data)}
                >
                  {typeof window !== 'undefined' &&
                  animated?.name === data.name &&
                  animated?.animation ? (
                    <Link href={data.link}>
                      <Lottie
                        animationData={data.animatedIcon}
                        loop={true}
                        rendererSettings={{
                          preserveAspectRatio: 'xMidYMid slice',
                          progressiveLoad: true,
                        }}
                        className={styles.img}
                      />
                    </Link>
                  ) : (
                    <img
                      src={data.icon.src}
                      alt={data.icon}
                      className={styles.img}
                    />
                  )}
                </div>
                <p className={styles.cardheading}>{data.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.smodelright}>
            <div className={styles.innermain}>
              <div className={styles.topdiv}>
                <div className={styles.imgdiv}>
                  <img src={expertices.src} alt="" className={styles.img} />
                </div>
                <div className={styles.details}>
                  <h1 className={styles.header}>Our Expertise</h1>
                  <p className={styles.para1}>
                    We offer innovative digital solutions spanning all latest
                    technologies and platforms.
                  </p>
                  <p className={styles.para2}>Cant find what you need?</p>
                  <button className={styles.smodelbtn}>Connect with us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

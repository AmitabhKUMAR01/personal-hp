import React from 'react';
import styles from './footer.module.scss';
import { flag } from '@/assets/footer_img/index';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { data } from '@/constants/index';
import Link from 'next/link';
function Footer() {
  const [img1, img2] = flag;

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.Coldata}>
          <h1 className={styles.heading}>About</h1>
          <div className={styles.coldetails}>
            {data[0].map((val, index) => (
              <Link href="/" key={index}>
                <p className={styles.link}>{val}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.Coldata}>
          <h1 className={styles.heading}>Portfolio</h1>
          <div className={styles.coldetails}>
            {data[1].map((val, index) => (
              <Link href="/" key={index}>
                <p className={styles.link}>{val}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.Coldata}>
          <h1 className={styles.heading}>Key Service</h1>
          <div className={styles.coldetails}>
            {data[2].map((val, index) => (
              <Link href="/" key={index}>
                <p className={styles.link}>{val}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.Coldatalast}>
          <h1 className={styles.headinglast}>Contact</h1>
          <div className={styles.contentdiv}>
            <span className={styles.imgdiv}>
              <img src={img1.src} className={styles.img} alt="" />
              <p>Address:</p>
            </span>
            <p className={styles.info}>
              HangingPanda Pvt. Ltd. B-64, B Block, Sector 63, Noida, Uttar
              Pradesh, India, 201301
            </p>
          </div>
          <div className={styles.contentdiv}>
            <span className={styles.imgdiv}>
              <img src={img2.src} className={styles.img} alt="" />
              <p>Address:</p>
            </span>
            <p className={styles.info}>
              HangingPanda Pvt. Ltd. 444 Alaska Avenue Suite #BTD615 Torrance,
              CA 90503 USA
            </p>
          </div>
          <div className={styles.coldatabottom}>
            <div className={styles.emaildiv}>
              <p>Email:</p>

              <a className={styles.email} href="mailto:info@hangingpanda.com">
                info@hangingpanda.com
              </a>
            </div>
            <div className={styles.phonediv}>
              <span className={styles.imgindia}>
                <img src={img1.src} className={styles.img} alt="" />
                <p>Phone:</p>
              </span>
              <a href="tel:+91-9311675528">+91-9311675528</a>
            </div>
            <div className={styles.phonediv}>
              <span className={styles.imgindia}>
                <img src={img2.src} className={styles.img} alt="" />
                <p>Phone:</p>
              </span>
              <a href="tel:+1(410)692-8715">+1 (410) 692-8715</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span>Copyright @ {new Date().getFullYear()}</span>&nbsp;
          <Link href="/" className={styles.btn}>
            HangingPanda
          </Link>
          &nbsp;
          <span>All rights reserved</span>
        </div>
        <div className={styles.right}>
          <Link href="https://www.facebook.com/officialhangingpanda">
            <FaFacebookF className={styles.facebook} />
          </Link>
          <Link href="https://www.instagram.com/officialhangingpanda/">
            <FaInstagram className={styles.instagram} />
          </Link>
          <Link href="https://twitter.com/HangingpandaI">
            <FaTwitter className={styles.twitter} />
          </Link>
          <Link href="https://www.linkedin.com/company/hangingpanda/">
            <FaLinkedinIn className={styles.linkedin} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

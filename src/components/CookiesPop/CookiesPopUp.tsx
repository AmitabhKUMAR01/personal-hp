'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './cookiePopUp.module.scss';
import Link from 'next/link';

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentCookie = document.cookie.match(/cookie_consent=(\w+)/);
    if (consentCookie && consentCookie[1] === 'accepted') {
      setIsVisible(false);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = 'cookie_consent=accepted; expires=365; path=/';
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.cookiePopup}>
        <div className={styles.popupContent}>
          <button
            className={styles.closeButton}
            onClick={() => setIsVisible(false)}
          >
            <X size={16} />
          </button>
          <div className={styles.content}>
            <p className={styles.text}>
              By clicking "Accept Cookies", you agree to our
              <Link href="/privacy-policy" className={styles.link}>
                {' '}
                privacy policy{' '}
              </Link>
              along with storing of cookies on your device to enhance site
              navigation, analyze site usage, and assist in our marketing
              efforts.
            </p>
            <p className={styles.text}>
              Want to know more about our policies? Check out our
              <Link href="/cookies-policy" className={styles.link}>
                {' '}
                cookies policy
              </Link>
              .
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.acceptButton} onClick={handleAccept}>
              Accept Policies
            </button>
            <button
              className={styles.declineButton}
              onClick={() => setIsVisible(false)}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;

import React from 'react';
import { CookiesPolicyData } from '@/constants';
import styles from './cookiePolicy.module.scss';
import Link from 'next/link';
import { Button } from '@/components/index';

const CookiePolicy = () => {
  return (
    <div className={styles.cookiePolicy}>
      <div className={styles.wrapper}>
        {CookiesPolicyData.map(
          (
            {
              Header,
              headerDescription,
              heading,
              description,
              title,
              descriptions,
              para,
            },
            index
          ) => (
            <div key={index}>
              {Header && (
                <div className={styles.headerDiv}>
                  <h2 className={styles.header}>{Header}</h2>
                  <p className={styles.headerDescription}>
                    {headerDescription}
                  </p>
                </div>
              )}
              <p className={styles.para}>{para}</p>
              {heading && description && (
                <ol start={index - 2}>
                  <li className={styles.types}>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                  </li>
                </ol>
              )}
              {title && (
                <div className={styles.subdata}>
                  <h2>{title}</h2>
                  <p>{descriptions}</p>
                </div>
              )}
            </div>
          )
        )}
        <div className={styles.contactUs}>
          <h2>Contact Us:</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Cookie Usage Policy, please contact us at
            <Link className={styles.link} href="">
              {' '}
              info@hangingpanda.com .
            </Link>
          </p>
        </div>
        <div className={styles.accept}>
          <p>
            By continuing to use our website, you acknowledge that you have read
            and understood this Cookie Usage Policy and consent to the use of
            cookies as described herein.
          </p>
          <Button
            title="I Accept Cookies!"
            borderRadius="10px"
            size="lg"
            className={styles.btn}
          />
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

import React from 'react';
import { PrivacyPolicyData } from '@/constants';
import styles from './privacyPolicy.module.scss';
import { Button } from '@/components/index';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.wrapper}>
        {PrivacyPolicyData.map(
          (
            {
              Header,
              headerDescription,
              heading,
              description,
              sections,
              list,
              note,
            },
            index
          ) => (
            <div key={index}>
              {Header && (
                <div className={styles.header}>
                  <h2>{Header}</h2>
                  <p>{headerDescription}</p>
                </div>
              )}
              {heading && <h3>{heading}</h3>}
              {description && <p>{description}</p>}
              {sections &&
                sections.map(({ title, description, list }, i) => (
                  <div key={i} className={styles.subheading}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    {list && (
                      <ul>
                        {list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              {list && (
                <ul className={styles.list}>
                  {list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              )}
              {note && <p className={styles['important-note']}>{note}</p>}
            </div>
          )
        )}
        <div className={styles.accept}>
          <p>
            By using our website or providing your personal information to us,
            you consent to the collection, use, and disclosure of your
            information as described in this Privacy Policy.
          </p>
          <Button
            title="I Accept policy!"
            borderRadius="10px"
            size="lg"
            className={styles.btn}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ButtonWithArrow.module.scss';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface ButtonWithArrowProps {
  text: string;
  link: string;
  textcolor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
  text,
  link,
  textcolor,
  size = 'xl',
}) => {
  const router = useRouter();

  return (
    <div className={clsx(styles.btnContainer, styles[size])}>
      <button
        onClick={() => router.push(link)}
        className={styles.learnMore}
        style={
          {
            '--text-color': textcolor || '#fff',
          } as React.CSSProperties
        }
      >
        <div className="flex items-center justify-between gap-2">
          <span className={styles.circle}>
            <ChevronRight className={styles.chevronIcon} />
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
          <span className={styles.buttonText}>{text}</span>
        </div>
      </button>
    </div>
  );
};

export default ButtonWithArrow;

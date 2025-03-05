'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './ShowMore.module.scss';
import { ShowMoreProps } from '@/types';

const leadingMap: Record<string, string> = {
  '3': 'leading-3',
  '4': 'leading-4',
  '5': 'leading-5',
  '6': 'leading-6',
  '7': 'leading-7',
  '8': 'leading-8',
  '9': 'leading-9',
  '10': 'leading-10',
};

const ShowMore: React.FC<ShowMoreProps> = ({ text, maxLength, leading }) => {
  const [hidden, setHidden] = useState(true);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Ensure consistent rendering on both server and client
    const isTextTrimmed = text.length > maxLength;
    setDisplayedText(
      hidden && isTextTrimmed
        ? text.substring(0, maxLength).trim() + '...'
        : text
    );
  }, [text, maxLength, hidden]);

  return (
    <div
      className={clsx(hidden ? 'less' : 'more', leading && leadingMap[leading])}
    >
      {displayedText}
      {text.length > maxLength && (
        <span onClick={() => setHidden(!hidden)}>
          &nbsp;
          <span className={styles.toggleButton}>
            {hidden ? 'Read More' : 'Show Less'}
          </span>
        </span>
      )}
    </div>
  );
};

export default ShowMore;

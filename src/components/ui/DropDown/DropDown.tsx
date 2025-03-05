'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './dropDown.module.scss';
import { DropdownProps } from '@/types';

const Dropdown = ({ placeholder = '', options, onChange }: DropdownProps) => {
  const [selected, setSelected] = useState<string>(placeholder);
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        <span className={styles.selected}>{selected}</span>
        <span className={styles.icon}>
          <ChevronDown />
        </span>
      </div>
      {open && (
        <div className={styles.menu}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.item} ${selected === option ? styles.selectedItem : ''}`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
                onChange?.(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;

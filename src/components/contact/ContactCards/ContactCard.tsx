import styles from './ContactCard.module.scss';
import Image from 'next/image';
import { contacts, addresses } from '@/constants';
import Link from 'next/link';

export const ContactCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Contact Information</div>
      {contacts.map(({ icon, type, value }, index) => (
        <div key={index} className={styles.container2}>
          <Image src={icon} height={32} width={32} alt="contact icon" />
          <Link href={`${type}:${value}`} className={styles.link}>
            {value}
          </Link>
        </div>
      ))}
      {addresses.map(({ icon, text }, index) => (
        <div key={index} className={styles.container3}>
          <Image
            src={icon}
            height={32}
            width={32}
            alt="office address"
            className={styles.image}
          />
          <p className={styles.para}>{text}</p>
        </div>
      ))}
    </div>
  );
};

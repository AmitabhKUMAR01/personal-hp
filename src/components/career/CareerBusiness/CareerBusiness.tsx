import Image from 'next/image';
import styles from './CareerBusiness.module.scss';
import { assetBaseUrl } from '@/constants';

export const CareerBusiness = () => {
  return (
    <div className={styles.career}>
      <h1>Let’s Build Thriving Businesses</h1>
      <p>
        We take the entire journey using the breadth of our team to deliver
        robust business solutions. We are always looking for creative, skilled,
        and driven people to join our team.
      </p>

      <div className={styles.imageContainer}>
        <div className={styles.mainImage}>
          <Image
            src={assetBaseUrl + 'career/CareerMain.webp'}
            alt="Main Image"
            width={600}
            height={800}
          />
        </div>

        <div className={styles.smallImages}>
          <Image
            src={assetBaseUrl + 'career/CareerBusiness1.webp'}
            alt="Business Image 1"
            width={280}
            height={230}
            className={styles.gridImage}
          />
          <Image
            src={assetBaseUrl + 'career/CareerBusiness2.webp'}
            alt="Business Image 2"
            width={280}
            height={230}
            className={styles.gridImage}
          />
          <Image
            src={assetBaseUrl + 'career/CareerBusiness3.webp'}
            alt="Business Image 3"
            width={280}
            height={230}
            className={styles.gridImage}
          />
          <Image
            src={assetBaseUrl + 'career/CareerBusiness4.webp'}
            alt="Business Image 4"
            width={280}
            height={230}
            className={styles.gridImage}
          />
        </div>
      </div>
    </div>
  );
};

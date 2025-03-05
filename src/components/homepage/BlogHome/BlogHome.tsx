import Image from 'next/image';
import styles from './bloghome.module.scss';
import { bloghomedata } from '@/constants';
import { ShowMore } from '@/components';

const title = 'Latest Blog Posts';
const text =
  'Explore our blog section to keep yourself updated with tech news and the latest trends!';

const BlogHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.cardContainer}>
        {bloghomedata?.map((data, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgdiv}>
              <Image src={data.img} alt="" width={1000} height={1000} />
            </div>
            <div className={styles.author}>
              <p>{data.name}</p>
              <p>{data.date}</p>
            </div>
            <div className={styles.content}>
              <h2>{data.text}</h2>
              <ShowMore text={data.cardContent} maxLength={150} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;

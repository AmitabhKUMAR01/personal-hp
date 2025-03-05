import styles from './work.module.scss';
import { Work1 } from '@/components';
import generateMetadata from '@/components/SEO/Seo';

export const metadata = generateMetadata({
  title: 'our-work',
  description:
    'Hanging Panda offers cutting-edge web and app development, digital marketing, branding, and software solutions tailored for your business.',
  url: 'https://www.hangingpanda.com/about',
  image: 'https://www.hangingpanda.com/og-image.jpg',
});

export default function OurWork() {
  return (
    <div className={styles.work}>
      <Work1 />
    </div>
  );
}

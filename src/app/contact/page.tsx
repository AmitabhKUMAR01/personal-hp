import styles from './contact.module.scss';
import { Contact } from '@/components';
import { generateMetadata } from '@/components/SEO/Seo';
export const metadata = generateMetadata({
  title: 'ContactUs',
  description:
    'Hanging Panda offers cutting-edge web and app development, digital marketing, branding, and software solutions tailored for your business.',
  url: 'https://www.hangingpanda.com',
  image: 'https://www.hangingpanda.com/og-image.jpg',
});

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <Contact />
    </div>
  );
}

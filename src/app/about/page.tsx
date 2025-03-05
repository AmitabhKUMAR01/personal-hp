import generateMetadata from '@/components/SEO/Seo';
import { AboutPage } from '@/components';

export const metadata = generateMetadata({
  title: 'About',
  description:
    'Hanging Panda offers cutting-edge web and app development, digital marketing, branding, and software solutions tailored for your business.',
  url: 'https://www.hangingpanda.com/about',
  image: 'https://www.hangingpanda.com/og-image.jpg',
});

export default function About() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}

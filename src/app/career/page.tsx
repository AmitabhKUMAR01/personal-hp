import generateMetadata from '@/components/SEO/Seo';
import { CareerPage } from '@/components';

export const metadata = generateMetadata({
  title: 'Career',
  description:
    'Hanging Panda offers cutting-edge web and app development, digital marketing, branding, and software solutions tailored for your business.',
  url: 'https://www.hangingpanda.com/career',
  image: 'https://www.hangingpanda.com/og-image.jpg',
});

export default function Career() {
  return (
    <div>
      <CareerPage />
    </div>
  );
}

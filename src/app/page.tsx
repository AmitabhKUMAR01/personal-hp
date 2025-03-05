import HomeWrapper from '@/components/homewrapper';
import { generateMetadata } from '@/components/SEO/Seo';

export const metadata = generateMetadata({
  title: 'Home',
  description:
    'Hanging Panda offers cutting-edge web and app development, digital marketing, branding, and software solutions tailored for your business.',
  url: 'https://www.hangingpanda.com',
  image: 'https://www.hangingpanda.com/og-image.jpg',
});

const Page = () => {
  return <HomeWrapper />;
};

export default Page;

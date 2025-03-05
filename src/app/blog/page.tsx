import { Blog } from '@/components';
import React from 'react';
import { generateMetadata } from '@/components/SEO/Seo';

export const metadata = generateMetadata({
  title: 'blog',
  description:
    'Hanging Panda offers cutting-edge web and app development, digital marketing, branding, and software solutions tailored for your business.',
  url: 'https://www.hangingpanda.com',
  image: 'https://www.hangingpanda.com/og-image.jpg',
});
function page() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export default page;

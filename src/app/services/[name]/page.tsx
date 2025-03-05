import { Services } from '@/components';
import { servicesData } from '@/constants';
import React from 'react';
import generateMetadata from '@/components/SEO/Seo';

export const metadata = generateMetadata({
  title: 'Services',
  description:
    'Hanging Panda offers top-notch services, including app development, software development, web design, branding, and digital solutions, tailored to elevate your business in the digital landscape.',
  url: 'https://www.hangingpanda.com',
  image: 'https://www.hangingpanda.com/og-image.jpg',
});

export default async function Page({
  params,
}: {
  params: Promise<{ name: keyof typeof servicesData }>;
}) {
  const { name } = await params;

  return (
    <>
      <Services name={name} />
    </>
  );
}

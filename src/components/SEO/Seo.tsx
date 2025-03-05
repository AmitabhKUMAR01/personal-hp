import { Metadata, Viewport } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = 'Mobile App Development, Website Development, App Development Company, IT Company, Android, iOS, Flutter, Linux, Web Development, Swift, Angular',
  url = 'https://www.hangingpanda.com',
  image = 'https://hp.thepandasolutions.com/websiteAssets/OG/linkedinOG.jpg',
}: SEOProps): Metadata {
  return {
    title: `${title} | Hanging Panda`,
    description,
    keywords,
    authors: [{ name: 'Hanging Panda' }],
    robots: 'index, follow',
    verification: {
      google: 'googlea027aa5ce0912a6c',
    },
    openGraph: {
      title: `${title} | Hanging Panda`,
      description,
      url,
      siteName: 'Hanging Panda',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Hanging Panda`,
      description,
      images: [image],
    },
    icons: {
      icon: '/icon.ico',
    },
  };
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default generateMetadata;

import React from 'react';
import {
  InventoryCard,
  OurService,
  FrameworkSlider,
  ChooseUs,
  KickStart,
  BlogHome,
  ScrollToTop,
} from '@/components';
import CookiePopup from '@/components/CookiesPop/CookiesPopUp';

const Home = () => {
  return (
    <>
      <FrameworkSlider />
      <OurService />
      <InventoryCard />
      <ChooseUs />
      <KickStart />
      <BlogHome />
      <ScrollToTop />
      <CookiePopup />
    </>
  );
};

export default Home;

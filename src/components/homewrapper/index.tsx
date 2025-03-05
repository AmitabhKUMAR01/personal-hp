'use client';
import React from 'react';

import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../homepage/Home/Home'), { ssr: false });

const HomeWrapper = () => {
  return <Home />;
};

export default HomeWrapper;

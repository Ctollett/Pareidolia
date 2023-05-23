import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import OpeningPage from '../components/openingPage';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import FeaturedWork from '../components/FeaturedWork';
import Footer from '../components/Footer';

function Home() {
  const [isContentVisible, setContentVisible] = useState(true);
  const [isOpeningAnimationComplete, setOpeningAnimationComplete] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  const handleMenuClick = () => {
    setContentVisible(!isContentVisible);
  };

  const handleOpeningAnimationComplete = () => {
    setOpeningAnimationComplete(true);
    setHeaderVisible(true);
  };

  return (
    <>
      {!isOpeningAnimationComplete && (
        <OpeningPage onAnimationComplete={handleOpeningAnimationComplete} />
      )}

      {isOpeningAnimationComplete && (
        <>
          <Navbar handleMenuClick={handleMenuClick} />
          {isHeaderVisible && <Header isContentVisible={isContentVisible} />}
          <InfoSection />
          <InfoSection2 />
          <FeaturedWork />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;

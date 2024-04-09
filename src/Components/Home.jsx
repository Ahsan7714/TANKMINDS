import React from 'react';
import NavbarA from './NavbarA/NavbarA';
import NavbarB from './NavbarB/NavbarB';
import LandingCarasoule from './LandingCarasoule/LandingCarasoule';
import Card from './Card/Card';
import LegalWayBanner from './LegalWayBanner/LegalWayBanner';
import WhatWeDeal from './WhatWeDeal/WhatWeDeal';
import AuthPopUp from './AuthPopUp/AuthPopUp';
import { useAuthPopUp } from '../context/authPopUpContext';
import Banner from './Banner/Banner.jsx';

const Home = () => {
  const { showModal, type, onClose, onOpen } = useAuthPopUp();

  return (
    <div>
      <NavbarA />
      <NavbarB />
      <Card />
      <LandingCarasoule />
      <LegalWayBanner />
      <WhatWeDeal />
      {showModal && (
        <AuthPopUp
        />
      )}
      <Banner/>
    </div>
  );
};

export default Home;

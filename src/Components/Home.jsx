// Home.jsx
import React, { useState } from 'react';
import NavbarA from './NavbarA/NavbarA';
import NavbarB from './NavbarB/NavbarB';
import LandingCarasoule from './LandingCarasoule/LandingCarasoule';
import Card from './Card/Card';
import LegalWayBanner from './LegalWayBanner/LegalWayBanner';
import WhatWeDeal from './WhatWeDeal/WhatWeDeal';
import AuthPopUp from './AuthPopUp/AuthPopUp';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [type, setType] = useState('signIn');

  const onClose = () => {
    setShowModal(false);
  };

  const onOpen = (type) => {
    setShowModal(true);
    setType(type);
  };

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
          type={type}
          onClose={onClose}
          onOpen={onOpen}
        />
      )}
    </div>
  );
};

export default Home;

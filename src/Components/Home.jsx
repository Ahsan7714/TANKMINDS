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
import CourtDegree from './CourtDegree/CourtDegree.jsx';
import InternshipOffer from './InternshipOffer/InternshipOffer.jsx';
import Tax from './Tax/Tax.jsx';
import PaidMediation from './PaidMediation/PaidMediation.jsx';
import CriminalMatters from './CriminalMatters/CriminalMatters.jsx';
import Register from './Register/Register.jsx';
import Tankminds from './Tankminds/Tankminds.jsx';

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
      <CourtDegree/>
      <InternshipOffer/>
      <Tax/>
      <PaidMediation/>
      <CriminalMatters/>
      <Tankminds/>
      <Register/>
    </div>
  );
};

export default Home;

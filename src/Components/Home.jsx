import React from 'react';
import LandingCarasoule from './LandingCarasoule/LandingCarasoule';
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
import Feedback from './Feedback/Feedback.jsx';

const Home = () => {
  const { showModal, type, onClose, onOpen } = useAuthPopUp();

  return (
    <div>
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
      <Feedback/>      
    </div>
  );
};

export default Home;

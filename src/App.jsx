import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import ConsultationAlert from './Pages/AdminDashboard/ConsultationAlert/ConsultationAlert';
import TaxFiler from './Pages/AdminDashboard/TaxFiler/TaxFiler';
import Complaint from './Pages/AdminDashboard/Complaint/Complaint';
import Offices from './Pages/AdminDashboard/Offices/Offices';
import Team from './Pages/AdminDashboard/Team/Team';
import Client from './Pages/AdminDashboard/Clients/Client';
import Inbox from './Pages/AdminDashboard/Inbox/Inbox';
import ClientPortalPage from './Pages/ClientPortalPage/ClientPortalPage';
import NavbarA from './Components/NavbarA/NavbarA';
import NavbarB from './Components/NavbarB/NavbarB';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';
const App = () => {
  return (
   <>
   <header>
          <NavbarA/>
      <NavbarB />
      <Card />
   </header>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/client-portal' element={<ClientPortalPage/>} />
    <Route path='/dashboard' element={<ConsultationAlert/>}/>
    <Route path='/tax-filer' element={<TaxFiler/>}/>
    <Route path='/complaint' element={<Complaint/>}/>
    <Route path='/offices' element={<Offices/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/clients' element={<Client/>}/>
    <Route path='/chat' element={<Inbox/>}/>
   </Routes>
   <footer>
      <Footer/>  
</footer>  
   

 
   </>
  );
};

export default App;

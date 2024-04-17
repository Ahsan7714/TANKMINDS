import React from 'react';

import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import ClientPortalPage from './Pages/ClientPortalPage/ClientPortalPage';
import NavbarA from './Components/NavbarA/NavbarA';
import NavbarB from './Components/NavbarB/NavbarB';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
   <>
   <header>
          <NavbarA />
      <NavbarB />
      <Card />
   </header>
<Routes>
<Route path='/' element={<Home/>} />  

<Route path='/client-portal' element={<ClientPortalPage/>} />




</Routes>
<footer>
<Footer/>  
</footer>   
   </>
  );
};

export default App;

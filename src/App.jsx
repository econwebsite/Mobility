import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from "./Components/NavBarcomp/NavBar";
import TotalHomePage from "./Components/HomePagecomp/TotalHomePage";
import Footerpage from "./Components/FooterComp/Footerpage";
import TotalSurroundview from "./Components/Productcomp/SurroundviewProduct/TotalSurroundview";
import Totalforwardfacing from "./Components/Productcomp/ForwardfacingProduct/Totalforwardfacing";
import Totalmonitoring from "./Components/Productcomp/DriverMonitoringProduct/Totalmonitoring";
import Partner from "./Components/PartnersComp/Partner"
import Blog from './Components/HomePagecomp/Blogcomp/Blog';
import ScrollToTop from "./Components/ScrollToTop"
import Casestudy from './Components/HomePagecomp/Casestudycomp/Casestudy';
import Cameramobility from "./Components/HomePagecomp/CameraMobility/Cameramobility"

const App = () => {
  return (

          <BrowserRouter>
              <ScrollToTop /> 

    <div className='fixed-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<TotalHomePage />} />
        <Route path="/surroundview" element={<TotalSurroundview/>} />
        <Route path="/forwardfacing" element={<Totalforwardfacing/>} />
        <Route path="/drivermonitoring" element={<Totalmonitoring/>} />
        <Route path="/Casestudy" element={<Casestudy/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Partner" element={<Partner/>} />
        <Route path="/Cameramobility" element={<Cameramobility/>} />

        

        </Routes>
        <Footerpage/>

        </div>
        </BrowserRouter>


  );
}

export default App;

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
import HubManufacturing from './Components/HubPageComp/ManufacturingHub/HubManufacturing';
import ScrollToTop from "./Components/ScrollToTop"
import BlogHubpage from './Components/HubPageComp/BlogHubpage/BlogHubpage';
import Casehubpage from "./Components/HubPageComp/CasestudyHubpages/Casehubpage"
import ContactUs from './Components/HomePagecomp/Homecontactus/ContactUs';
import HdrLedBlog from "./Components/FutureBlog/HdrLedBlog"
import DrivermonBlog from "./Components/FutureBlog/DrivermonBlog"
import ForwardBlog from "./Components/FutureBlog/ForwardBlog"
import SurroundBlog from "./Components/FutureBlog/SurroundBlog"
import NotFoundPage from "./Components/Notfoundpage";
import ProductPage from "./Components/Productcomp/see3camcomp/Testing1/ProductPage"

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
        <Route path="/Partner" element={<Partner/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/BlogHubpage" element={<BlogHubpage/>} />
        <Route path="/CasestudyHubpage" element={<Casehubpage/>} />
        <Route path="/HubManufacturing" element={<HubManufacturing/>} />
        <Route path="/HdrLedBlog" element={<HdrLedBlog/>} />
        <Route path="/DrivermonBlog" element={<DrivermonBlog/>} />
        <Route path="/ForwardBlog" element={<ForwardBlog/>} />
        <Route path="/SurroundBlog" element={<SurroundBlog/>} />
        <Route path="/ProductPage" element={<ProductPage/>} />

        
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footerpage/>

        </div>
        </BrowserRouter>


  );
}

export default App;

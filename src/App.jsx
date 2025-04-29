import React,{useState} from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from "./Components/NavBarcomp/NavBar";
import TotalHomePage from "./Components/HomePagecomp/TotalHomePage";
import Footerpage from "./Components/FooterComp/Footerpage";
import TotalSurroundview from "./Components/Productcomp/SurroundviewProduct/TotalSurroundview";
import Totalforwardfacing from "./Components/Productcomp/ForwardfacingProduct/Totalforwardfacing";
import Totalmonitoring from "./Components/Productcomp/DriverMonitoringProduct/Totalmonitoring";
import Totalrearview from "./Components/Productcomp/Rearviewproduct/Totalrearview"
import ScrollToTop from "./Components/ScrollToTop"
import BlogHubpage from './Components/HubPageComp/BlogHubpage/BlogHubpage';
import ContactUs from './Components/HomePagecomp/Homecontactus/ContactUs';
import HdrLedBlog from "./Components/FutureBlog/HdrLedBlog"
import DrivermonBlog from "./Components/FutureBlog/DrivermonBlog"
import ForwardBlog from "./Components/FutureBlog/ForwardBlog"
import SurroundBlog from "./Components/FutureBlog/SurroundBlog"
import NotFoundPage from "./Components/Notfoundpage";
import TotalIndustries from './Components/Industriescomp/TotalIndustries';
import popupimg from "./assets/homepage/STURDeCAM88-popup.png"
import PopupModal from './Components/Popupcomp/PopupModal';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => setShowPopup(false);

  return (

          <BrowserRouter>
                    <HelmetProvider>
          
              <ScrollToTop /> 

    <div className='fixed-container'>
      <NavBar/>
      <PopupModal
            show={showPopup}
            onClose={handleClosePopup}
            imageUrl={popupimg} 
            linkUrl="https://www.e-consystems.com/nvidia-cameras/jetson-agx-orin-cameras/4k-omnivision-ox08b40-140db-hdr-gmsl2-camera.asp"       
          />
      <Routes>
        <Route path="/" element={<TotalHomePage />} />
        <Route path="/surround-view-cameras" element={<TotalSurroundview/>} />
        <Route path="/forward-facing-cameras" element={<Totalforwardfacing/>} />
        <Route path="/driver-monitoring-cameras" element={<Totalmonitoring/>} />
        <Route path="/rear-view-cameras" element={<Totalrearview/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/blog" element={<BlogHubpage/>} />
        <Route path="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" element={<HdrLedBlog/>} />
        <Route path="/blog/how-driver-monitoring-cameras-improve-safety-features/" element={<DrivermonBlog/>} />
        <Route path="/blog/how-forward-facing-camera-works-in-adas/" element={<ForwardBlog/>} />
        <Route path="/blog/how-surround-view-cameras-improve-driving-parking-safety/" element={<SurroundBlog/>} />
       
        <Route path="/industries" element={<TotalIndustries/>} />
        <Route path="/industries/:marketName?" element={<TotalIndustries />} />        
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footerpage/>

        </div>
        </HelmetProvider>
        </BrowserRouter>


  );
}

export default App;

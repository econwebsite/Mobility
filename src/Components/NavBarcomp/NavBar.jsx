import React, { useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { FaCamera } from "react-icons/fa";
import { Navbar, Nav, Container, Offcanvas, Form, Button } from 'react-bootstrap';
import './Navbar.css';
import shelflogo from "../../assets/homepage/shelfmonitor-logo.svg";
import Modelbutton from '../ButtonComp/Modelbutton';

const NavBar = () => {
  const offcanvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleNavLinkClick = () => {
    if (offcanvasRef.current) {
      offcanvasRef.current.hide(); 
    }
  };


  const linkStyle = {
    color: isHovered ? "white" : "#ffc107",
    fontWeight: "600",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };
  const resourceMenu = (
    <Menu  style={{border:"1px solid #00aeef"}}>
      <Menu.Item key="1">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/BlogHubPage" onClick={handleNavLinkClick}>Blog</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/CasestudyHubPage" onClick={handleNavLinkClick}>Case Studies</Link>
      </Menu.Item>
    </Menu>
  );
  
  const SolutionMenu = (
    <Menu  style={{width:"300px",border:"1px solid #00aeef"}}>
      <Menu.Item key="1">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="" onClick={handleNavLinkClick}>Product 1</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="" onClick={handleNavLinkClick}>Product 2</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="" onClick={handleNavLinkClick}>Product 3</Link>
      </Menu.Item>
    </Menu>
  );
  const MobileMenu = (
    <Menu  style={{width:"auto",border:"1px solid #00aeef"}}>
      <Menu.Item key="1">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/surroundview" onClick={handleNavLinkClick}>Surround View Cameras</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/forwardfacing" onClick={handleNavLinkClick}>Forward Facing Cameras</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/drivermonitoring" onClick={handleNavLinkClick}>Driver Monitoring Cameras</Link>
      </Menu.Item>
    </Menu>
  );

  // const productMenu = (
  //   <Menu>
  //     <Menu.Item key="1">
  //       <Link style={{textDecoration:"none",color:"#344ea1",fontSize:"medium"}} to="/Intraoralcamera" onClick={handleNavLinkClick}>IntraOral camera</Link>
  //     </Menu.Item>
  //     <Menu.Item key="2">
  //       <Link style={{textDecoration:"none",color:"#344ea1",fontSize:"medium"}} to="/Extraoral" onClick={handleNavLinkClick}>ExtraOral camera</Link>
  //     </Menu.Item>
  //     <Menu.Item key="3">
  //       <Link style={{textDecoration:"none",color:"#344ea1",fontSize:"medium"}} to="/product" onClick={handleNavLinkClick}>Loupe camera</Link>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <>
      {/* Desktop View */}
      <nav className="navbarpage-navbar desktop-view">
        <div className='mainContainer'>
          <div className="navbarpage-header">
            <div className="navbarpage-logoContainer">
              <Link to="/">
                <img src={shelflogo} alt=" Logo" className="navbarpage-logo" onClick={() => navigate('/Aguidtochoose')} style={{ cursor: "pointer" }} />
              </Link>
            </div>
            <div className="navbarpage-navItems">
            <Link to="/" className="navbarpage-navLink">Home</Link>
            <div className="navbarpage-divider"></div>
              {/* <Dropdown overlay={SolutionMenu} placement="bottomLeft" trigger={['hover']}>
                <Link className="navbarpage-navLink">SHELFVista</Link>
              </Dropdown> */} 
                
              <Link to="/SHELFVista" style={linkStyle}  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className="navbarpage-navLink"> <FaCamera  style={{color:"#f1f2f2",margin:"1px",alignItems:"center",fontSize:"24px"}}/>  SHELFVista</Link>

              <div className="navbarpage-divider"></div>
              {/* <Dropdown overlay={productMenu} placement="bottomLeft" trigger={['hover']}>
                <Link className="navbarpage-navLink">Products</Link>
              </Dropdown> */}
            <Link to="/BlogHubPage" className="navbarpage-navLink">Blog</Link>
              <div className="navbarpage-divider"></div>
              <Link to="/Aboutus" className="navbarpage-navLink">About Us</Link>
            </div>
            <div className="navbarpage-rightColumn">
              {/* <input type="text" placeholder="Search.." className="navbarpage-searchInput" /> */}
              <div className="navbarpage-contact">
                <i className="ri-phone-fill navbarpage-phoneIcon"></i>
                <div className="navbarpage-contactDetails">
                  <a style={{ textDecoration: "none", color: "#003873" }} href="tel:+14087667503">

                    <p className="navbarpage-tellUs">Call us</p>
                    <p className="navbarpage-phoneNumber">+1 408 766 7503</p>
                  </a>
                </div>
                <Modelbutton text="Contact Us" backgroundColor="#f9cd47" textColor="black" hoverTextColor="#344ea1" className='Navbargetquote' />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile View */}
      <Navbar expand="lg" className="mobile-view">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={shelflogo} alt="Logo" className="navbarpage-logo-mobile" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas className='Toggle-background'
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            ref={offcanvasRef}
          >
            <Offcanvas.Header closeButton style={{ color: "white", borderBottom: "1px solid white" }}>
              <Offcanvas.Title id="offcanvasNavbarLabel" style={{ color: "white" }}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column navbarpage-offcanvas-nav">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
                {/* <Dropdown overlay={productMenu} placement="bottomLeft" className="nav-link">
                  <a className="nav-link">Products</a>
                </Dropdown> */}
               <Link className="nav-link" to="/SHELFVista" style={{color:"#ffc107"}} onClick={handleNavLinkClick}>SHELFVista</Link>

               <Link className="nav-link" to="/BlogHubPage" onClick={handleNavLinkClick}>Blog</Link>

                <Link className="nav-link" to="/Aboutus" onClick={handleNavLinkClick}>About Us</Link>
                
                <Link className="nav-link" to="/Contactus" onClick={handleNavLinkClick}>Contact Us</Link>
              </Nav>
              {/* <Form className="d-flex mt-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" style={{ color: "white", borderColor: "#69ba2f", backgroundColor: "#69ba2f" }}>Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

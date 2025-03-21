import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { Navbar, Nav, Container, Offcanvas, Form, Button } from 'react-bootstrap';
import './Navbar.css';
import dentallogo from "../../assets/homepage/footerlogo-1.svg";
import AnimationButton from '../ButtonComp/AnimationButton';

const NavBar = () => {
  const offcanvasRef = useRef(null);

  const handleNavLinkClick = () => {
    if (offcanvasRef.current) {
      offcanvasRef.current.hide(); 
    }
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
    <Menu style={{ width: "300px", border: "1px solid #00aeef" }}>
      <Menu.Item key="1">
        <Link to="/surroundview" onClick={handleNavLinkClick}>
          Surround View Cameras
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/forwardfacing" onClick={handleNavLinkClick}>
          Forward Facing Cameras
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/rearview" onClick={handleNavLinkClick}>
          Rear View Cameras
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/drivermonitoring" onClick={handleNavLinkClick}>
          In-Cabin Monitoring System
        </Link>
      </Menu.Item>
    </Menu>
  );
  
  const MobileMenu = (
    <Menu style={{ width: "300px", border: "1px solid #00aeef" }}>
      <Menu.Item key="1">
        <Link to="/surroundview" onClick={handleNavLinkClick}>
          Surround View Cameras
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/forwardfacing" onClick={handleNavLinkClick}>
          Forward Facing Cameras
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/rearview" onClick={handleNavLinkClick}>
          Rear View Cameras
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/drivermonitoring" onClick={handleNavLinkClick}>
          In-Cabin Monitoring System
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* Desktop View */}
      <nav className="navbarpage-navbar desktop-view">
        <div className='mainContainer'>
          <div className="navbarpage-header">
            <div className="navbarpage-logoContainer">
              <Link to="/">
                <img src={dentallogo} alt="Dental Logo" className="navbarpage-logo" onClick={() => navigate('/Aguidtochoose')} style={{ cursor: "pointer" }} />
              </Link>
            </div>
            <div className="navbarpage-navItems">
            <Link to="/" className="navbarpage-navLink">Home</Link>
            <div className="navbarpage-divider"></div>
              <Dropdown overlay={SolutionMenu} placement="bottomLeft" trigger={['hover']}>
                <Link className="navbarpage-navLink">Products</Link>
              </Dropdown>
              <div className="navbarpage-divider"></div>
              {/* <Dropdown overlay={productMenu} placement="bottomLeft" trigger={['hover']}>
                <Link className="navbarpage-navLink">Products</Link>
              </Dropdown> */}
            {/* <Dropdown overlay={resourceMenu} placement="bottomLeft" trigger={['hover']}>
                <Link className="navbarpage-navLink">Resources</Link>
              </Dropdown> */}
            <Link to="/Industries" className="navbarpage-navLink">Industries</Link>
            <div className="navbarpage-divider"></div>

              <Link to="/BlogHubPage" className="navbarpage-navLink">Blog</Link>
              <div className="navbarpage-divider"></div>
              
              <Link to="/ContactUs" className="navbarpage-navLink">Contact Us</Link>
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
                <div style={{marginRight:"30px"}}></div>
                {/* <AnimationButton text="Get a Quote" backgroundColor="#00aeef" className='Navbargetquote' hoverColor="#00aeef" animationColor="#69ba2f" /> */}
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
              <img src={dentallogo} alt="Dental Logo" className="navbarpage-logo-mobile" />
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
                <Dropdown overlay={MobileMenu} placement="bottomLeft" className="nav-link">
                  <a className="nav-link">Products</a>
                </Dropdown>
                {/* <Dropdown overlay={resourceMenu} placement="bottomLeft" className="nav-link">
                  <a className="nav-link">Resources</a>
                </Dropdown> */}
                <Link className="nav-link" to="/BlogHubPage" onClick={handleNavLinkClick}>Blog</Link>

                
                <Link className="nav-link" to="/ContactUs" onClick={handleNavLinkClick}>Contact Us</Link>
                
                <Link className="nav-link" to="/Partner" onClick={handleNavLinkClick}>Partners</Link>
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

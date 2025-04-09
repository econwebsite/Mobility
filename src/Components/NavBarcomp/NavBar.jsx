import React, { useState,useRef,useEffect } from 'react';
import { 
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Popover,
  MenuItem,
  Box,
  styled
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import dentallogo from "../../assets/homepage/footerlogo-1.svg";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f1f2f2',
  boxShadow: '0 4px 30px rgba(121, 116, 116, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#003873',
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 400,
  fontSize: '1.1em',
  margin: theme.spacing(0, 2),
  whiteSpace: 'nowrap',
  '&:hover': {
    color: '#00aeef',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: 'rgba(2, 2, 2, 0.2)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px 0 0 16px',
    width: '93%',
    color: 'white',
  },
}));

const NavBar = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const closeTimeoutRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handlePopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 300); 
  };

  const handlePopoverEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    if (!open) setAnchorEl(anchorEl);
  };
  useEffect(() => {
    if (!mobileOpen) {
      setMobileMenuOpen(false);
    }
  }, [mobileOpen]);

  const handlePopoverLeave = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const SolutionMenu = (
    <Box sx={{ 
      p: 1, 
      width: 300,
      '& .MuiMenuItem-root': {
        color: '#344ea1',
        fontSize: '1.1em',
        '&:hover': {
          backgroundColor: '#00aeef',
          color: 'white',
        }
      }
    }}>
      <MenuItem 
        component={Link} 
        to="/surround-view-camera" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        Surround View Cameras
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/forward-facing-camera" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        Forward Facing Cameras
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/rear-view-camera" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        Rear View Cameras
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/driver-monitoring-camera" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        In-Cabin Monitoring System
      </MenuItem>
    </Box>
  );

  const drawerContent = (
    <>
     <Box sx={{ 
        p: 2, 
        borderBottom: '1px solid white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'  
      }}>
        <Typography variant="h6" sx={{ color: 'white' }}>Menu</Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>
      </Box>
      <List sx={{ p: 1 }}>
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to="/" 
            onClick={handleDrawerToggle}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="Home" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
          </ListItemButton>

        </ListItem>
        <ListItem disablePadding>
          <ListItemButton 
            onClick={(e) => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="Products" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
            {mobileMenuOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
          </ListItemButton>
        </ListItem>
        {mobileMenuOpen && (
         <List sx={{ pl: 2 }}>
         {[
           { label: 'Surround View Cameras', path: '/surround-view-camera' },
           { label: 'Forward Facing Cameras', path: '/forward-facing-camera' },
           { label: 'Rear View Cameras', path: '/rear-view-camera' },
           { label: 'In-Cabin Monitoring System', path: '/driver-monitoring-camera' },
         ].map((item, index) => (
           <ListItem key={index} disablePadding>
             <ListItemButton
               component={Link}
               to={item.path}
               onClick={handleDrawerToggle}
               sx={{
                 '&:hover .MuiListItemText-primary': { color: '#00aeef' },
                 pl: 2,
               }}
             >
               <ListItemText
                 primary={item.label}
                 primaryTypographyProps={{
                   sx: { color: 'white', fontSize: '0.85em', textAlign: 'left' },
                 }}
               />
             </ListItemButton>
           </ListItem>
         ))}
       </List>
       
          
        )}

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to="/industries" 
            onClick={handleDrawerToggle}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="Industries" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to="/blog" 
            onClick={handleDrawerToggle}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="Blog" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to="/contact-us" 
            onClick={handleDrawerToggle}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="Contact Us" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
  
  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
    
    <Link to="/">
      <img 
        src={dentallogo} 
        alt="Dental Logo" 
        style={{ 
          height: isDesktop ? '80px' : '56px', 
          width: isDesktop ? '300px' : 'auto', 
          objectFit: 'contain',
          margin:"5px",
          cursor: 'pointer'
        }} 
      />
    </Link>
    {isDesktop && (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        <NavLink to="/">Home</NavLink>
        <Divider orientation="vertical" flexItem />
      <NavLink
  {...(open && { 'aria-owns': 'products-menu' })}
  aria-haspopup="true"
  onMouseOver={handlePopoverOpen}
>
  Products
</NavLink>

        <Divider orientation="vertical" flexItem />
        <NavLink to="/industries">Industries</NavLink>
        <Divider orientation="vertical" flexItem />
        <NavLink to="/blog">Blog</NavLink>
        <Divider orientation="vertical" flexItem />
        <NavLink to="/contact-us">Contact Us</NavLink>
      </Box>
    )}

    {isDesktop ? (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <PhoneIcon sx={{ color: '#003873', fontSize: '24px' }} />
        <Box>
          <Typography variant="body2" sx={{ color: '#00aeef', fontSize: '1em' }}>
            Call us
          </Typography>
          <Typography variant="body2" sx={{ color: '#003873', fontSize: '14px', whiteSpace: 'nowrap' }}>
            +1 408 766 7503
          </Typography>
        </Box>
      </Box>
    ) : (
      /* Mobile Menu Icon */
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{ color: '#003873' }}
      >
        <MenuIcon />
      </IconButton>
    )}
    
  </Box>
</Toolbar>

        </Container>

        <Popover
          id="products-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{ 
            sx: { border: '1px solid #00aeef' },
            onMouseEnter: handlePopoverEnter,
            onMouseLeave: handlePopoverLeave
          }}
          disableRestoreFocus

        >
          {SolutionMenu}
        </Popover>
      </StyledAppBar>

      <StyledDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
        <Popover
          open={Boolean(mobileMenuAnchor)}
          anchorEl={mobileMenuAnchor}
          onClose={() => setMobileMenuAnchor(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {SolutionMenu}
        </Popover>
      </StyledDrawer>
    </>
  );
};

export default NavBar;
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
  Select,
  Box,
  styled
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import econlogo from "../../../assets/homepage/footerlogo-1.svg";
import usFlag from '../../../assets/homepage/flags/us-flag.svg';
import krFlag from '../../../assets/homepage/flags/kr-flag.svg';

const languageOptions = [
  { value: 'en', label: 'EN', flag: usFlag, alt: 'English' },
  { value: 'ko', label: 'KR', flag: krFlag, alt: 'Korean' },
];

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
  transition: 'color 0.3s ease-in-out',
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

const NavBar = ({ language = 'en', onLanguageChange }) => {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [anchorElIndustries, setAnchorElIndustries] = useState(null);
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const navigate = useNavigate();
  const location = useLocation();
  const closeTimeoutRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [anchorElResources, setAnchorElResources] = useState(null);
const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const handleLanguageSelect = (event) => {
    const nextLanguage = event.target.value;
    if (onLanguageChange) {
      onLanguageChange(nextLanguage);
    }
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handlePopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 100); 
  };
  const handleIndustriesPopoverOpen = (event) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorElIndustries(event.currentTarget);
  };

  const handleIndustriesPopoverClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorElIndustries(null);
    }, 100);
  };
  const handlePopoverEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    if (!open) setAnchorEl(anchorEl);
  };
  useEffect(() => {
    if (!mobileOpen) {
      setMobileMenuOpen(false);
       setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
    }
  }, [mobileOpen]);

  const handlePopoverLeave = () => {
    setAnchorEl(null);
    setAnchorElIndustries(null);
  setAnchorElResources(null);
  };
  const handleResourcesPopoverOpen = (event) => {
  clearTimeout(closeTimeoutRef.current);
  setAnchorElResources(event.currentTarget);
};

const handleResourcesPopoverClose = () => {
  closeTimeoutRef.current = setTimeout(() => {
    setAnchorElResources(null);
  }, 100);
};
  const open = Boolean(anchorEl);
  const openIndustries = Boolean(anchorElIndustries);

  const renderLanguageValue = (selectedValue) => {
    const selectedOption = languageOptions.find((item) => item.value === selectedValue) || languageOptions[0];
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          component="img"
          src={selectedOption.flag}
          alt={selectedOption.alt}
          sx={{ width: 22, height: 16, borderRadius: '2px', objectFit: 'cover' }}
        />
        <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: 1 }}>{selectedOption.label}</Typography>
      </Box>
    );
  };



  const SolutionMenu = (
    <Box sx={{ 
      p: 1, 
      width: 300,
      '& .MuiMenuItem-root': {
        color: '#344ea1',
        fontSize: '1.1em',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: '#00aeef',
          color: 'white',
        }
      }
    }}>
      <MenuItem 
        component={Link} 
        to="/surround-view-cameras" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        서라운드 뷰 카메라
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/forward-facing-cameras" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        전방 카메라
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/rear-view-cameras" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        후방 카메라
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/driver-monitoring-cameras" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        실내 모니터링 카메라
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/autonomous-driving-control-unit" 
        onClick={() => {
          handlePopoverClose();
          setMobileOpen(false);
          setMobileMenuAnchor(null);
        }}
      >
        자율주행 제어 유닛
      </MenuItem>
    </Box>
  );
  const IndustriesMenu = (
    <Box sx={{ 
      p: 1, 
      width: 300,
      '& .MuiMenuItem-root': {
        color: '#344ea1',
        fontSize: '1.1em',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: '#00aeef',
          color: 'white',
        }
      }
    }}>
      <MenuItem 
        component={Link} 
        to="/industries/agricultural-vehicle-camera-systems" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        농업 차량
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/industries/mining-vehicle-camera-systems" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        광산 차량
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/industries/autonomous-delivery-robot-cameras" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        배달 로봇
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/industries/rugged-cameras-for-construction-vehicles" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        건설 차량
      </MenuItem> 
      <MenuItem 
        component={Link} 
        to="/industries/garbage-truck-vision-systems" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        쓰레기 수거 트럭
      </MenuItem> 
    
      <MenuItem 
        component={Link} 
        to="/industries/autonomous-vehicle-vision-systems" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        자율주행 차량
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/industries/delivery-truck-vision-systems" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        배송 트럭
      </MenuItem>
      <MenuItem 
        component={Link} 
        to="/industries/autonomous-lawn-mower-vision-systems" 
        onClick={() => {
          handleIndustriesPopoverClose();
          setMobileOpen(false);
        }}
      >
        잔디 깎는 차량
      </MenuItem> 
    </Box>
  );
const ResourcesMenu = (
  <Box sx={{ 
    p: 1, 
    width: 250,
    '& .MuiMenuItem-root': {
      color: '#344ea1',
      fontSize: '1.1em',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: '#00aeef',
        color: 'white',
      }
    }
  }}>
    <MenuItem 
      component={Link} 
      to="/blog" 
      onClick={handleResourcesPopoverClose}
    >
      블로그
    </MenuItem>
    <MenuItem 
      component={Link} 
      to="/case-study" 
      onClick={handleResourcesPopoverClose}
    >
      사례 연구
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
              primary="홈" 
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
              primary="제품" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
            {mobileMenuOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
          </ListItemButton>
        </ListItem>
        {mobileMenuOpen && (
         <List sx={{ pl: 2 }}>
         {[
           { label: '서라운드 뷰 카메라', path: '/surround-view-cameras' },
           { label: '전방 카메라', path: '/forward-facing-cameras' },
           { label: '후방 카메라', path: '/rear-view-cameras' },
           { label: '실내 모니터링 카메라', path: '/driver-monitoring-cameras' },
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
            onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="산업" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
            {mobileIndustriesOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
          </ListItemButton>
        </ListItem>
        {mobileIndustriesOpen && (
          <List sx={{ pl: 2 }}>
            {[
              { label: '농업 차량', path: '/industries/agricultural-vehicle-camera-systems' },
              { label: '광산 차량', path: '/industries/mining-vehicle-camera-systems' },
              { label: '배달 로봇', path: '/industries/autonomous-delivery-robot-cameras' },
              { label: '건설 차량', path: '/industries/rugged-cameras-for-construction-vehicles' },
              { label: '쓰레기 수거 트럭', path: '/industries/garbage-truck-vision-systems' },
              { label: '자율주행 차량', path: '/industries/autonomous-vehicle-vision-systems' },
              { label: '배송 트럭', path: '/industries/delivery-truck-vision-systems' },
              { label: '잔디 깎는 차량', path: '/industries/autonomous-lawn-mower-vision-systems' },

   
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
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="리소스" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
            {mobileResourcesOpen  ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
          </ListItemButton>
        </ListItem>
        {mobileResourcesOpen && (
          <List sx={{ pl: 2 }}>
            {[
             
              { label: '블로그', path: '/blog' },
              { label: '사례 연구', path:"/case-study" },
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
            to="/contact-us" 
            onClick={handleDrawerToggle}
            sx={{ '&:hover': { color: '#00aeef' } }}
          >
            <ListItemText 
              primary="문의하기" 
              primaryTypographyProps={{ style: { color: 'white' } }} 
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <Box sx={{ width: '100%', px: 2, pt: 1 }}>
            <Typography sx={{ color: 'white', mb: 1, fontSize: '0.9rem' }}>Language</Typography>
            <Select
              value={language}
              onChange={handleLanguageSelect}
              size="small"
              fullWidth
              renderValue={renderLanguageValue}
              sx={{
                color: 'white',
                border: '1px solid rgba(255,255,255,0.5)',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '& .MuiSvgIcon-root': { color: 'white' },
                '& .MuiSelect-select': { display: 'flex', alignItems: 'center', py: 0.8 },
              }}
              MenuProps={{ PaperProps: { sx: { mt: 0.5 } } }}
            >
              {languageOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      component="img"
                      src={option.flag}
                      alt={option.alt}
                      sx={{ width: 22, height: 16, borderRadius: '2px', objectFit: 'cover' }}
                    />
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>{option.label}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Box>
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
    
    <a href="https://www.e-consystems.com/">
      <img 
        src={econlogo} 
        alt="econ logo" 
        style={{ 
          height: isDesktop ? '70px' : '50px', 
          width: isDesktop ? '250px' : 'auto', 
          objectFit: 'contain',
          margin:"5px",
          cursor: 'pointer'
        }} 
      />
    </a>
    {isDesktop && (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        <NavLink to="/">홈</NavLink>
        <Divider orientation="vertical" flexItem />
      <NavLink
  {...(open && { 'aria-owns': 'products-menu' })}
  aria-haspopup="true"
  onMouseOver={handlePopoverOpen}
>
  제품
</NavLink>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
              {isDesktop && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  {/* ... existing nav items ... */}
                  <Divider orientation="vertical" flexItem />
                  <NavLink
                    aria-haspopup="true"
                    onMouseOver={handleIndustriesPopoverOpen}
                  >
                    산업
                  </NavLink>
                </Box>
              )}
            </Box>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
              {isDesktop && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <Divider orientation="vertical" flexItem />
                  <NavLink
                    aria-haspopup="true"
                    onMouseOver={handleResourcesPopoverOpen}
                  >
                    리소스
                  </NavLink>
                </Box>
              )}
            </Box>
        <Divider orientation="vertical" flexItem />
        <NavLink to="/contact-us">문의하기</NavLink>
      </Box>
    )}
      

    {isDesktop ? (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Select
          value={language}
          onChange={handleLanguageSelect}
          size="small"
          renderValue={renderLanguageValue}
          sx={{
            minWidth: 100,
            height: 38,
            backgroundColor: '#fff',
            color: '#003873',
            borderRadius: '8px',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#b8ccdf' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#00aeef' },
            '& .MuiSvgIcon-root': { color: '#003873' },
            '& .MuiSelect-select': { display: 'flex', alignItems: 'center', py: 0.8, pr: 3.5 },
          }}
        >
          {languageOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  component="img"
                  src={option.flag}
                  alt={option.alt}
                  sx={{ width: 22, height: 16, borderRadius: '2px', objectFit: 'cover' }}
                />
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>{option.label}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
        <PhoneIcon sx={{ color: '#003873', fontSize: '24px' }} />
        <Box>
          <Typography variant="body2" sx={{ color: '#00aeef', fontSize: '1em' }}>
            전화 문의
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


        <Popover
          id="industries-menu"
          open={openIndustries}
          anchorEl={anchorElIndustries}
          onClose={handleIndustriesPopoverClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{ 
            sx: { border: '1px solid #00aeef' },
            onMouseEnter: handlePopoverEnter,
            onMouseLeave: handlePopoverLeave
          }}
          disableRestoreFocus
        >
          {IndustriesMenu}
        </Popover>
        <Popover
  open={Boolean(anchorElResources)}
  anchorEl={anchorElResources}
  onClose={handleResourcesPopoverClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  disableRestoreFocus
  PaperProps={{ onMouseEnter: handlePopoverEnter, onMouseLeave: handleResourcesPopoverClose }}
>
  {ResourcesMenu}
</Popover>

      </StyledAppBar>
      <StyledDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </StyledDrawer>
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
      <Popover
  open={Boolean(anchorElResources)}
  anchorEl={anchorElResources}
  onClose={handleResourcesPopoverClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  disableRestoreFocus
  PaperProps={{ onMouseEnter: handlePopoverEnter, onMouseLeave: handleResourcesPopoverClose }}
>
  {ResourcesMenu}
</Popover>

      </StyledDrawer>
    </>
  );
};

export default NavBar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack, AppBar, Toolbar, IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon

import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleComponentChange = (event) => {
    const selectedComponent = event.target.value;
    if (selectedComponent) {
      navigate(`/${selectedComponent}`);
    }
    
    setMobileMenuOpen(false);
  };
  const handleComponentChangeMobile=(value)=>{
    navigate(`/${value}`)
    setMobileMenuOpen(false);
  }

  return (
    <AppBar position="static"  style={{backgroundColor:'inherit'}}>
      <Toolbar  sx={{display:'flex', justifyContent:'space-between'}}>
        <Link to="/">
          <img src={Logo} alt="logo" style={{ width: '110px', height: '50px', margin: '0 20px' }} />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontSize="24px"
          alignItems="center"
          sx={{ display: { sm: 'flex', xs: 'none' } }}
        >


        {/* Links hidden on mobile */}

      

  <Link to="/"  className="py-4 border-b-2 border-blue-700 text-white" >Home</Link>
        <a href="#exercises" style={{textDecoration:'none'}} className="py-4 text-white">Exercise</a>
        <Link to="/pricing"  className="py-4 text-white" >Pricing</Link>


      <ul style={{paddingTop:0}}>       
       <li>
            <select onChange={handleComponentChange}
            style={{
              backgroundColor: '#090909', 
              color: 'white',        
              border: 'none',        
              padding: '5px', 
              outline: 'none'     
            }}>
              <option value="">Claculate Fitness</option>
              <option value="bmi">BMI Calculator</option>
              <option value="bfp">Body Fat Percentage</option>
              <option value="whr">Waist-Hip Ratio</option>
              <option value="ibw">Ideal Body Weight</option>
            </select>
          </li>
          </ul>

          <div>
          {/* Register Button */}
          <Button
            sx={{
              backgroundColor: 'inherit',
              color: 'white',
         
              border: '2px solid #F97316',
              '&:hover': {
                backgroundColor: '#F97316',
              },
            }}
        >
        <Link to="/register"   >Register</Link>

            
          </Button>
        </div>
        </Stack>
        <div className="text-center py-auto">

          {/* Mobile Menu Button (Hamburger Icon) */}


          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
       
            onClick={handleMobileMenuToggle}
            sx={{ display: { sm: 'none' } }}
         
          >
           { isMobileMenuOpen ?<CloseIcon />  :<MenuIcon />} 
          </IconButton>

          {/* Mobile Menu ------*/}

          {isMobileMenuOpen && (

            <div
              style={{
                position: 'absolute',
                top: '60px',
                left: 0,
                width: '100%',
                height: 'calc(100vh - 60px)',
                backgroundColor: '#090909',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >

              



              {/* Menu Items on mobile screen*/}
              <MenuItem  className="py-4 border-b-2 border-blue-700 text-white"   onClick={() => handleComponentChangeMobile('')} >Home</MenuItem>
               
              <MenuItem className="py-4 text-white"  onClick={() => handleComponentChangeMobile('pricing')} >Pricing</MenuItem>

              <MenuItem onClick={() => handleComponentChangeMobile('bmi')}>BMI Calculator</MenuItem>
              <MenuItem onClick={() => handleComponentChangeMobile('bfp')}>  Body Fat Percentage</MenuItem>
              <MenuItem onClick={() => handleComponentChangeMobile('whr')}>Waist-Hip Ratio</MenuItem>
              <MenuItem onClick={() => handleComponentChangeMobile('ibw')}>Ideal Body Weight</MenuItem>

              <div>

              {/* Register Button on mobile */}

          <Button
            sx={{
              backgroundColor: 'inherit',
              color: 'white',
              padding: -2,
              border: '2px solid #F97316',
              '&:hover': {
                backgroundColor: '#F97316',
              },
            }}
            onClick={() => handleComponentChangeMobile('register')}
          >
             
             Register
          </Button>
        </div>
            </div>
          )}
        </div>
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

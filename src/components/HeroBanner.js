// import React from 'react'
// import {Box,Stack,Typography,Button} from '@mui/material'

// import HeroImg from '../assets/images/banner.svg'
// const HeroBanner = () => {

//   return (
//     <Box sx={{
//         mt:{md:'170px',xs:'70px'},
//         ml:{sm:'50px'}
//     }} position="relative" p="20px" color="white">

// <Typography
// fontWeight="600" fontsize='30px'
//   >
//     Fitness Club  
// </Typography>
// <Typography
// sx={{fontSize:{md:'75px', xs:'40px'}}}
//  className="font-bold my-20 text-white text-5xl">
//     <span className="text-orange-500 font-bold"> Transform  </span>
//     <br />
// Your Body
// </Typography>

// <Typography
//     fontSize="22px"
//     lineHeight="35px"  mb={4}
//     className="text-orange-500/[0.5] font-bold"
// >
//    Check out the Effective Execises
// </Typography>
 
//  <Button variant='contained' color='error' href='#exercises'
//     sx={{backgroundColor:"#F97316", padding:'10px'}} 
//  >
//     Explore Exercises
//  </Button>

//  <Typography 
//         fontWeight={600}
//         color="#ff2625"
//         sx={{
           
//             display:{sm:'block',xs:'none'}
//         }}
//         fontSize="200px"
//         >
//            Fitness
//  </Typography>

//  <Box sx={{ display: { sm: 'block', xs: 'inline' } }}>
//         <img
//           src={HeroImg}
//           sx={{ opacity: 0.5 }}
//           alt="banner"
//           className="hero-banner-img"
//         />
//       </Box>
//     </Box>
//   )
// }

// export default HeroBanner
import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroImg from '../assets/images/banner.svg';

const HeroBanner = () => {
  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      alignItems={{ md: 'center', xs: 'stretch' }}
      justifyContent={{ md: 'space-between', xs: 'center' }}
      mt={{ md: '100px', xs: '70px' }}
      // mb={{ md: '200px', xs: '70px' }}

      ml={{ sm: '50px' }}
      spacing={{ xs: 4 }}
      px="20px"
      color="white"
      position="relative"
    >
      <Box>
        <Typography fontWeight="600" fontSize="30px">
          Fitness Club
        </Typography>
        <Typography
          sx={{ fontSize: { md: '75px', xs: '40px' } }}
          className="font-bold my-20 text-white text-5xl"
        >
          <span className="text-orange-500 font-bold"> Transform </span>
          <br />
          Your Body
        </Typography>
        <Typography
          fontSize="22px"
          lineHeight="35px"
          mb={4}
          className="text-orange-500/[0.5] font-bold"
        >
          Check out the Effective Exercises

          
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: '#F97316', padding: '10px' }}
        >
          Explore Exercises
        </Button>
        {/* Fitness Text */}
      <Typography
        fontWeight={600}
        color="#F97316"
        
        sx={{
          display: { sm: 'block', xs: 'none' },
          zIndex: 1,
          opacity:0.3,
         
          top: '50%',
          left: '50%',
          // transform: 'translate(10%, 20%)',
        }}
        fontSize="200px"
      >
        Fitness
      </Typography>
      </Box>
      <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
        <img
          src={HeroImg}
          sx={{ opacity: 0.5 }}
          alt="banner"
          className="hero-banner-img"
        />
      </Box>
          
      {/* Image Container */}
      <Box
        sx={{
          display: { sm: 'none', xs: 'block' },
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <img
          src={HeroImg}
          sx={{ opacity: 0.5, width: '100%', height: '100%', objectFit: 'cover' }}
          alt="banner"
          className="hero-banner-img"
        />
      </Box>

      {/* Fitness Text */}
      {/* <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          display: { sm: 'block', xs: 'none' },
          zIndex: 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        fontSize="200px"
      >
        Fitness
      </Typography> */}
    </Stack>
  );
};

export default HeroBanner;

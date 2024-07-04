import { Box,Button,Stack,Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box  
    position="relative"
    bottom={0}
    left={0}
    width="100%" mt='20vh'  bgcolor='#3F3F3F' style={{alignItem:'bottom'}} sx={{height:{xs:'15vh' ,sm:'29vh',lg:'30vh'}}}>
      <Stack gap='2px' alignItems='center' px='20px' pt='1px'>
      {/* <img src={Logo} alt="logo"  width="100px" heigth="20px"/> */}
      <Typography variant="caption"
        sx={{fontSize:{
         xs:'20px', sm:'30px',md:'55px'
        } , fontWeight:700}}
      >Let's start</Typography>
      <Box 
       style={{ display: 'flex', justifyContent:'space-between',alignItems:"stretch" }}
      >
        <Typography style={{paddingRight:'24px',alignItems:'start',padding:'8px'}}
          sx={{fontSize:{xs:'14px',sm:'15px',md:'20px' }}}
        >warehouse31@gmail.com</Typography>

        <Button style={{border:'2px solid orange',borderRadius:'20px',textAlign:'center',alignContent:'center',paddingInline:'20px',color:'white',height:"2.5rem"}}
        sx={{fontSize:{xs:'8px',sm:'15px',md:'20px' }}} >
           Get a quote
           </Button>

        <Typography style={{paddingRight:'24px', paddingLeft:'24px',right:0}}
         sx={{fontSize:{xs:'14px',sm:'15px',md:'20px' }}}>
          (+91) 9911995970
          </Typography>
      </Box>
      <Typography variant='h5' pb="14px" mt="5px"
      
      sx={{ fontSize: { md: '15px',sm:'10px', xs: '10px' } }}
      >
       © Copyright 2023 All rights reserved |  Made with love by Sumit Panwar
      </Typography>
      {/* <Typography 
       sx={{fontSize:{xs:'10px',sm:'15px',md:'15px'}}}
      >
        <a href="https://www.instagram.com/your_instagram_page">
        <img src="instagram_icon.png" alt="Instagram" />
      </a>
      <a href="https://www.youtube.com/your_youtube_channel">
        <img src="youtube_icon.png" alt="YouTube" />
      </a>
      </Typography> */}
      </Stack>

    </Box>
  )
}

export default Footer

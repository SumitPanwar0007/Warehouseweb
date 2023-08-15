import { Box,Stack,Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/logo.svg'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#475569'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <img src={Logo} alt="logo"  width="200px" heigth="40px"/>
      <Typography variant='h5' pb="40px" mt="20px">
        © Copyright 2023 All rights reserved |  Made with love by Sumit Panwar
      </Typography>
      </Stack>

    </Box>
  )
}

export default Footer

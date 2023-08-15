import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack type="button" alignItems='center' justifyContent="Center" className='bodyPart-card'
                sx={{
                    borderTop:bodyPart === item ?'4px solid #ff2625': " ",
                    backgroundColor:'', 
                    borderBottomLeftRadius:'20px',
                    width:'100px',height:'80px',cursor:'pointer', gap:'5px',borderRadius:'30%'
                }}
                onClick={()=>{
                    setBodyPart(item);
                    window.scrollTo({top:1800,left:100,behavior:'smooth'})
                }}

                >
        <img src={Icon} alt="dumbbell" style={{width:'40px',height:'40px',backgroundColor:'#F97316'}} />
      
        <Typography fontSize='15px' fontWeight="" color="white" textTransform='capitalize'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart

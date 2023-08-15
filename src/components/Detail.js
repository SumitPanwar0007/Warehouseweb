import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({exerciseDetail}) => {

    const{bodyPart,gifUrl, name,target,equipment}=exerciseDetail;
    const extraDetail=[
        {
            icon:BodyPartImage,
            name:bodyPart,
        },  
        {
            icon:TargetImage,
            name:target,
         },  
        {
            icon:EquipmentImage,
            name:equipment,
        } 
 ]
//  console.log('the tareget is::  '+ exerciseDetail.equipment)
  return (
    <Stack gap="60px" sx={{flexDirection:{md:'row'},p:'20px',alignItems:'center',justifyContent:'center',text:'white'}}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image"  />
        <Stack  sx={{gap:{md:'30px',xs:'20px',width:'50%'}}} className="text-white">
        <Typography 
                    variant='h3' 
        ><span className="text-orange-400">{name}</span> </Typography>
        <Typography variant='h6'>
            Exercises keep you strong. {name} {` `} is one of the best exercise to target your Abs. It will help you improve your mood and gain energy.
        </Typography>

        {extraDetail.map((item)=>(
            <Stack key={item.name} direction="row" gap="18px" alignItems="center" >
                <Button sx={{background:'#fff2bd',borderRadius:'50%', width:'100px', height:'100px'}}>
                    <img src={item.icon} alt="" style={{width:'50px', heigth:'50px'}}  />
                </Button>
                <Typography textTransform='capitalize' variant='h5'className="text-orange-400/[0.5]" >
                    {item.name}
                </Typography>
            </Stack>
        ))}
        </Stack>
    </Stack>
  )
}

export default Detail

import React from 'react'
import {Link} from 'react-router-dom';
import {Button,Stack,Typography} from '@mui/material';
const ExerciseCard = ({exercise}) => {
  return (
      <Link className="exercise-card bg-[#475569]  w-auto"  to={`/exercise/${exercise.id}`} >
      
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className="opacity-75 " />
     
     <Stack direction='row' className="py-2">
     
  <Button      sx={{ml:'21px',color:'#fff', background:'#ffa9a9',
                      fontSize:'14PX',borderRadius:'20px',textTransform:'capitalize'}}
                      >
                    {exercise.bodyPart}
     </Button>
      <Button   sx={{ml:'21px',color:'#fff', background:'#F97316',
                      fontSize:'14PX',borderRadius:'20px',textTransform:'capitalize'}}
        
                   >
                    {exercise.target}
     </Button>
    
  
  
     </Stack>
     <Typography ml="21px" color="#000"  fontWeight="semibold" mt="1px" pb='0px' textTransform="capitalize">
      {exercise.name}
     </Typography>
   
      </Link>

  )
}

export default ExerciseCard

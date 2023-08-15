import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizonalScrollbar from './HorizonalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {


  return (
    <Box  sx={{mt:{md:'100px',xs:'0'}}} >
      <Typography variant='h3' mb={5}>
      <p className="text-white p-10">  Exercises that target the same <span className="text-orange-500">muscle </span>group</p>
        <Stack  direction='row' sx={{p:'2',position:'relative'}}>
          {targetMuscleExercises.length ?<HorizonalScrollbar data={targetMuscleExercises} /> : <Loader />}
        </Stack>
      </Typography>

      <Typography variant='h3' mb={5}>
      <p className="text-white p-10">  Exercises that target the same <span className="text-orange-500">Equipment </span></p>
    
        <Stack  direction='row' sx={{p:'2',position:'relative'}}>
          {equipmentExercises.length ?<HorizonalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>
      </Typography>
    </Box>
  )
}

export default SimilarExercises

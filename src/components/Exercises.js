import React,{useEffect,useState} from 'react'
// import { Pagination } from '@mui/material/Pagination'
import { default as Pagination, getPaginationUtilityClass, paginationClasses } from '@mui/material/Pagination';

import {Box,Stack, Typography} from '@mui/material/';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  // console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage=9;

  const indexOfLastExercise= currentPage*exercisesPerPage;
  const indedOfFirstExercise=indexOfLastExercise-exercisesPerPage;

  const currentExercises = exercises.slice(indedOfFirstExercise,indexOfLastExercise)

  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1300,behavior:'smooth'})
  }
  // debugger;

  useEffect(()=>{
    const fetchExerciseData= async()=>{
      let exercisesData=[];

      if(bodyPart === 'all'){
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',exerciseOptions); 
        }
      else{
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions); 
          }
          setExercises(exercisesData);
    }
    fetchExerciseData();
  },[bodyPart])
  return (
   <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px" p="20px"
    >
      <Typography variant='h4' className="text-orange-500/[0.8] py-8"
       sx={{ fontSize: { md: '55px',sm:'45px', xs: '30px' } }}>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'120px',xs:'50px'}}}
        flexWrap='wrap' justifyContent='center' >
        
         {currentExercises.map((exercise, index)=>(
          
          <ExerciseCard  key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems='center'>
        {exercises.length >9 && (
          <Pagination 
          color="standard" 
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}/>
        )}
      </Stack>
   </Box>
  )
}

export default Exercises

import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField, Typography} from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import HorizonalScrollbar from './HorizonalScrollbar'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

const [search,setSearch]=useState('')
const [bodyParts,setBodyPartsData]=useState([])

 useEffect(()=>{
  const fetchExerciseData =async ()=>{
    const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
    setBodyPartsData(['all', ...bodyPartsData]);
  }
  fetchExerciseData();
 },[])

const handleSearch= async()=>{
  if(search){
    const exerciseData= await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

    console.log(exerciseData)
    const SearchExercises=exerciseData.filter(
      (exercise)=>
        exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(SearchExercises);

  }
}
  return (
    <Stack alignItems="center" mt='37px'
            justifyContent="center" p="20px" color='white'>
        
        <Typography  fontWeight={700} 
           sx={{fontSize:{lg:'44px',xs:'30px'}}}
            mb="50px" textAlign="center"  >
            Awesome Exercises You  <br /> Should Know
        </Typography>

        <Box position='relative' mb='72px'> 

            <TextField 
                sx={{
                    input:{ fontWeight:'700', border:'none', borderRadius:'4px'},
                    width:{md:'800px', xs:'350px'},
                    backgroundColor:'#fff',
                    borderRadius:'40px'
                }}

               height="76px" value={search}
               onChange={(e)=>{ setSearch(e.target.value.toLowerCase())}}
               placeholder='Search Express'
               type="text"
               
               />
               <Button
                    sx={{  borderRadius:'24px', bgcolor:'#F97316', color:'#fff', textTransform:'none',
                             width:{md:'175px',xs:'80px' } , fontSize:{md:'20px',xs:'14px'},
                            height:'56px', position:'absolute', right:'0'}}
                            onClick={handleSearch}
               >
                search
               </Button>
        </Box>

        <Box   
             sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizonalScrollbar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyparts/>
        </Box>

    </Stack>
  )
}

export default SearchExercises

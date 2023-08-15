import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions,fetchData, youtubeoptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideo from '../components/ExerciseVideo'



const ExerciseDetails = () => {
  const [exerciseDetail,setExerciseDetail]=useState({});
 const [exerciseVideos,setExerciseVideos] =useState([])
 const [targetMuscleExercises,setTargetMuscleExercises]= useState([]);
 const [equipmentExercises,setEquipmentExercises] = useState([]);


  const { id }= useParams();
  useEffect(()=>{
    const fetchExercisesData= async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailsData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailsData);
 
 
      const ExerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,youtubeoptions);
      setExerciseVideos(ExerciseVideoData.contents)

      const targetMuscleExerciseData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,exerciseOptions)
        setTargetMuscleExercises(targetMuscleExerciseData)
      const equipmentExerciseData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,exerciseOptions)
        setEquipmentExercises(equipmentExerciseData)
    }
    
    fetchExercisesData();
   },[id]);
   
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails

import React,{useState} from 'react'
import {Box, Typography} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
const [exercises,setExercises]=useState([])
//  console.log(bodyPart)
// const videoUrl='https://pixabay.com/videos/fitness-workout-gym-sport-148203/'
  return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises  exercises={exercises}  setExercises={setExercises} bodyPart={bodyPart}/>
       
       
       
        <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},paddingTop:'40px',paddingBottom:'40px',textAlign:{xs:'start'},gap:'20px'}}>
        
       
        <Typography  style={{color:'white',padding:'15px',textJustify:"end"}}>
        <p>Let's make Healthy happen!!</p>
        <Typography variant='h3' style={{color:'#F97316',padding:'10px'}}> FITNESS FOR ALL </Typography>
   Fitness is not the prerogative of a few AF gyms in India. It is the right of each individual on the same premise and 
   we are committed to 'Make Healthy Happen' for all. <br />  
      </Typography>
       <Box sx={{width:{sm:'70%',xs:'90%'}, paddingLeft:{xs:'20px'}}} >
       
       <video controls={false} autoPlay muted width="560">
        <source src="./yoga.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </Box>
         </Box>

         <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column-reverse'},paddingTop:'40px',textAlign:{xs:'start'},gap:'20px'}}>

        <Box  sx={{width:{sm:'70%',xs:'90%'}, paddingLeft:{xs:'20px'}}} >
        <video controls={false} autoPlay muted width="560">
        <source src="./girl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
        </Box>
        
      <Typography  style={{color:'white',fontSize:{sm:'45',xs:'25'},textAlignLast:'start'}}>
        <p>See what Anytime Fitness is all about!</p>
        <Typography variant='h3' style={{color:'#F97316',padding:'10px'}}>GYM'S Virtual Toour at a Glance </Typography>
   Join us on a Virtual Tour around Anytime Fitness. You can take safe,personal virtual tour of our Club from the comfort of your home.br <br />
   Our facilities are equipped with sate-of-the-art fitness infrastructure making AF the top gym in India to be a part of. <br />
      </Typography>
         </Box>

        </Box>


  )
}

export default Home

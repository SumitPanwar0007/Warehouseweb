import React from 'react'
import { Box,Stack,Typography } from '@mui/material'





const ExerciseVideo = ({exerciseVideos,name}) => {

//youtube

// debugger;
  return (

    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p="20px" className='text-white'>
        <Typography variant='h3' mb="33px">
            Watch <span className="text-orange-500 uppercase">{name}</span>  exercise Vidoes
        </Typography>
         <Stack justifyContent="flex-start" flexWrap="wrap" alingItems="center" 
                    sx={{flexDirection:{md:'row'},gap: {md:'60px',xs:'0'}
                }}>
                   
                    {exerciseVideos.slice(0,6).map((item,index) => {
                   return <a 
                        key={index} className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 

                     
                        >
                          
                            <img src={item.video.thumbnails[0].url} placeholder='one' alt={item.video.title} className="rounded-xl" />
                           <Box>
                           <Typography variant='h5'>
                                 {item.video.title}
                            </Typography>
                            <Typography className="text-orange-500/[0.5]">
                                By- {item.video.channelName}
                            </Typography>
                           </Box>
                            
                        </a>
                    })}

                    
            </Stack>
    </Box>
  )
}

export default ExerciseVideo

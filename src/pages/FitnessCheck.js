import React, { useEffect, useState } from 'react'
import Option from '../components/check/Options'

  import {fetchData, fitnessCheck} from '../utils/fetchData'
const FitnessCheck = () => {
// const [fitnessDetail,setFitnessDetail]= useState({});

// useEffect(()=>{
//     const fetchFitnessData= async()=>{
//         const fitnessdbUrl='https://mega-fitness-calculator1.p.rapidapi.com/bmi'

//     const fitnessDetailData= await fetchData(`${fitnessdbUrl}`)
//     setFitnessDetail(fitnessDetailData);
// }
// fetchFitnessData();
// },[])

 console.log(fetchData)
 console.log("hello")
  return (
    <div>
      {/* <Option fitnessDetail={fitnessDetail} /> */}
    </div>
  )
}

export default FitnessCheck

// const axios = require('axios');

export  const exerciseOptions = {
  method: 'GET',
//   url: ,
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_WORKOUT_KEY ,
    'x-rapidapi-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeoptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',

  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_WORKOUT_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fitnessCheck = {
  method: 'GET',
  url: 'https://mega-fitness-calculator1.p.rapidapi.com/bmi',
  path: '/bmi?weight=65&height=167',
 headers : {
    'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_WORKOUT_KEY,
    'Content-Type': 'application/json',
  }

};

export const fetchData= async  (url,options)=>{
   try{   
    const response = await fetch(url,options);
    if(!response.ok){
      throw new Error(`HTTP error! status : ${response.status}`)
    }
    const data= await response.json();
   
    return data;
  } 
  catch(error){
    console.error("Error fetching data:", error);
    throw error;
  }
}
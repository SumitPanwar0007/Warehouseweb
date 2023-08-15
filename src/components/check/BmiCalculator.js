import React, { useEffect, useState } from 'react';
import { fetchData, fitnessCheck } from '../../utils/fetchData';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiData, setBmiData] = useState(null);

  



  const calculateBmi=async()=>{
    const BmiUrl='https://mega-fitness-calculator1.p.rapidapi.com/bmi';
    const BmiNewData= await fetchData(`${BmiUrl}?weight=${weight}&height=${height}`,fitnessCheck);
    setBmiData(BmiNewData)
  }


  return (
    <div style={{border:'2px-solid-red', widows:'60vw', height:'auto', backgroundColor:'inherit',color:'white',textAlign:'center', alignContent:'center', margin:'auto'} }>
      <h1 className='text-4xl text-orange-500 py-4'>BMI Calculator</h1>
      <label>
        Weight (kg):
        <input type="number" value={weight} className=" rounded text-black bg-slate-200 my-4" onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Height (cm):
        <input type="number" value={height} className=" rounded text-black  my-4" onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBmi} className=" rounded border-2 border-transparent  px-4 bg-orange-500 my-4">Calculate BMI</button>

      {bmiData && (
        <div className=" rounded-xl shadow-md p-4 shadow-orange-500 border-2 border-slate-800 bg-inherit my-4 w-2/3 mx-auto">
          <h1 className="text-xl font-bold">BMI Data:</h1>
          <p className="text-lg font-semibold">BMI:<span className="text-orange-500"> {bmiData.info.bmi}</span> </p>
          <p className="text-lg font-semibold">Category: <span className="text-orange-500">{bmiData.info.health} </span> </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;

import React, { useState } from 'react'
import { fetchData, fitnessCheck } from '../../utils/fetchData';

const Whr = () => {
    const [waist,setWaist]=useState('')
    const [hip,setHip]=useState('')
    const[gender,setGender]=useState('')
    const[whrData,setWhrData]=useState(null);

    const calculateWHR= async()=>{
        const WhrUrl='https://mega-fitness-calculator1.p.rapidapi.com/whr';
        const whrNewData= await fetchData(`${WhrUrl}?waist=${waist}&hip=${hip}&gender=${gender}`,fitnessCheck);
        setWhrData(whrNewData);
    }
   
  return (
   <div  style={{border:'2px-solid-red', widows:'60vw', height:'auto', backgroundColor:'inherit',color:'white',textAlign:'center', alignContent:'center', margin:'auto'} }>
    <h1 className='text-4xl text-orange-500 py-4'>Calculator Waist-to-Hip Ratio </h1>
    <label>
      Waist Size (kg):
      <input type="number" value={waist}  className=" rounded text-black my-4" onChange={(e) => setWaist(e.target.value)} />
    </label>
    <br />
    <label>
      Hips size (cm):
      <input type="number" value={hip}  className=" rounded  text-black my-4" onChange={(e) => setHip(e.target.value)} />
    </label>
    <br />
    <label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gender:
      <input type="text" value={gender}  className=" rounded text-black my-4" onChange={(e) => setGender(e.target.value)} />
    </label>
    <br />
    <button onClick={calculateWHR} className=" rounded border-2 border-transparent  px-4 bg-orange-500 my-4">Calculate BMI</button>

    {whrData && (
      <div className=" rounded-xl shadow-md p-4 shadow-orange-500 border-2 border-slate-800 bg-inherit my-4 w-2/3 mx-auto">
        <h2 className="text-xl font-bold py-4">Your Waist-To-Hips Ratio Data</h2>
        <p className="text-lg font-semibold">WHR :<span className="text-orange-500">  {whrData.info.whr}</span></p>
        <p className="text-lg font-semibold">BodyShape : {whrData.info.bodyShape}</p>
        <p className="text-lg font-semibold">RiskLevel : <span className="text-orange-500"> {whrData.info.riskLevel}</span> </p>

      </div>
    )}
  </div>
      

  )
}

export default Whr

import React, { useState } from 'react'
import { fetchData, fitnessCheck } from '../../utils/fetchData';

const Bfp = () => {
    const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender,setGender]=useState('');
  const [bfpData,setBfpData]=useState(null);


  const calculateBfp=async()=>{
    const BmiUrl='https://mega-fitness-calculator1.p.rapidapi.com/bfp';
    const BfpNewData= await fetchData(`${BmiUrl}?weight=${weight}&height=${height}&age=${age}&gender=${gender}`,fitnessCheck);
    setBfpData(BfpNewData)
  }

    
   
  return (
    <div   style={{border:'2px-solid-red', widows:'60vw', height:'auto', backgroundColor:'inherit',color:'white',textAlign:'center', alignContent:'center', marginBottom:'auto'} }>
      <h1 className='text-4xl text-orange-500 py-4'>Get your BODY FAT Percentage</h1>
      <label >
        Weight(kg) :
        <input type="number" value={weight}  className=" rounded text-black my-4" onChange={(e)=>setWeight(e.target.value)} />
      </label>
      <br />
      <label >
        Height(cm) :
        <input type="number"  className=" rounded text-black my-4" value={height} onChange={(e)=>setHeight(e.target.value)} />
      </label>
      <br />
      <label >
      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Age :
        <input type="number"  className=" rounded text-black my-4" value={age} onChange={(e)=>setAge(e.target.value)} />
      </label>
      <br />
      <label >
      &nbsp;&nbsp; &nbsp;&nbsp;Gender :
        <input type="text"  className=" rounded text-black my-4" value={gender} onChange={(e)=>setGender(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBfp} className=" rounded border-2 border-transparent  px-4 bg-orange-500 my-2">Calculate BFP</button>

      {bfpData && (
        <div className=" rounded-xl shadow-md p-4 shadow-orange-500 border-2 border-slate-800 bg-inherit my-4 w-2/3 mx-auto">
            <h2>BFP Data:</h2>
            <p>BFP: <span className="text-orange-500"> {bfpData.info.bfp}</span></p>
            <p>Fat Mass:{bfpData.info.fat_mass}</p>
            <p>Lean Mass:{bfpData.info.lean_mass}</p>
            <p>description  :<span className="text-orange-500"> {bfpData.info.description}</span>   </p>



                    </div>
      )}
    </div>
  )
}

export default Bfp

import React, { useState } from 'react'
import { fetchData, fitnessCheck } from '../../utils/fetchData';

const IdealBodyW = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender,setGender]=useState('');
    const [IbwData, setIbwData] = useState(null);


    const calculateIBW= async ()=>{
        const IbwUrl='https://mega-fitness-calculator1.p.rapidapi.com/ibw'
        const IbwNewData= await fetchData(`${IbwUrl}?weight=${weight}&height=${height}&gender=${gender}`,fitnessCheck)
        setIbwData(IbwNewData)
    }

  return (
    <div  style={{border:'2px-solid-red', widows:'60vw', height:'auto', backgroundColor:'inherit',color:'white',textAlign:'center', alignContent:'center', margin:'auto'} }>
      <h1 className='text-4xl text-orange-500 py-4'> Ideal Body Weigth  calculator</h1>
      <label >
        Weight(kg) :
        <input type="number" value={weight}  className=" rounded text-black my-4" onChange={(e)=>setWeight(e.target.value)} />
      </label>
      <br />
      <label >
        Height(cm) :
        <input type="number" value={height}  className=" rounded text-black my-4" onChange={(e)=>setHeight(e.target.value)} />
      </label>
      <br />
      
      <label >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gender :
        <input type="text" value={gender}  className=" rounded text-black my-4" onChange={(e)=>setGender(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateIBW} className=" rounded border-2 border-transparent  px-4 bg-orange-500 my-4">Calculate BFP</button>

      {IbwData && (
        <div className=" rounded-xl shadow-md p-4 shadow-orange-500 border-2 border-slate-800 bg-inherit my-4 w-2/3 mx-auto">
            <h2 className="text-xl font-bold">IBW Data:</h2>
            <p className="text-lg font-semibold">Robinson :<span className="text-orange-500">  {IbwData.info.robinson}</span> </p>
            <p className="text-lg font-semibold">Miller:{IbwData.info.miller}</p>
            <p className="text-lg font-semibold">Devine:{IbwData.info.devine}</p>
            <p className="text-lg font-semibold">Hamwi :{IbwData.info.hamwi}</p>



                    </div>
      )}
    </div>
  )
}

export default IdealBodyW

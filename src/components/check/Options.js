import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Bmi from './Bmi';
import Bmr from './Bmr';
import Bfp from './Bfp';
import Ibw from './Ibw';


const Options = (props) => {

  return (
    <>
    <div className="w-10/12 h-screen flex-col items-end text-center content-center mx-auto text-white ">
        <label htmlFor="fitness"> Select what you want to check</label>
        {/* <Routes>   <select name="fitness" id="checkOne" className=" mx-4 bg-inherit border-b-2 border-orange-500  ">
         <option value='' disabled>... </option>

          <option value='BMI' className="bg-slate-500">  <Route path="/Bmi" element={<Bmi />} />   BMI </option>
          <option value='BMR'className="bg-slate-500"> <Route path="/Bmr" element={<Bmr />} /> BMR </option>
          <option value='BFP' className="bg-slate-500">  <Route path="/Bfp" element={<Bfp />} />BFP </option>
          <option value='IBW' className="bg-slate-500"> <Route path="/Ibw" element={<Ibw />} /> IBW</option>
          <option value='WHR' className="bg-slate-500">WHR </option>
          <option value='ABSI' className="bg-slate-500">ABSI </option>
          <option value='TDEE' className="bg-slate-500">TDEE </option>
          
        
         </select>
         </Routes> */}
      <h1 className="my-6" >Check your <span className="text-orange-500"> Body Mass Index </span></h1>
        <div className="border-2 border-blue-400 w-10/12 p-8 content-center mx-auto">
                <div className="border-2 border-red-500 flex flex-col content-center items-center px-8 gap-4">
                    <h4>Enter your details here</h4>
                   
                <input name="fname" type="text" placeholder='Enter your name'  />

                <input name="fname" type="text" placeholder='Enter your Weight'  />
            <input type="text" placeholder='Enter your height in cm' />
            <button className="px-2 bg-slate-500">Check</button>
                    
                </div>
            </div>



      </div>
    </>
    
  )
}

export default Options

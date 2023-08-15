import {Route,Routes} from 'react-router-dom';
import './App.css';
import {Box} from '@mui/material'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';


import BmiCalculator from './components/check/BmiCalculator';
import Bfp from './components/check/Bfp';
import Whr from './components/check/Whr';
import IdealBodyW from './components/check/IdealBodyW';
import Pricing from './components/Pricing';
import Register from './components/Register';
function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}} }>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetails />}  />
        <Route path="/pricing" element={<Pricing/>}  />
        <Route path="/register" element={<Register/>}  />

        
        <Route path="/bmi" element={<BmiCalculator />} />
        <Route path="/bfp" element={<Bfp />} />
        <Route path="/whr" element={<Whr />} />
        <Route path="/ibw" element={<IdealBodyW />} />
      </Routes>
    
      <Footer />
    </Box>
  );
}

export default App;

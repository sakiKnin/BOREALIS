import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Step1 from './components/Step_1'
import Step2 from './components/Step_2'
import Step3 from './components/Step_3'
import Step4 from './components/Step_4'
import FinishConfirmation from './components/FinishConfirmation'
 
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
	  			  <Route path='/' element={<LandingPage/>}/> 
            <Route path='/korak_1' element={<Step1/>}/>
            <Route path='/korak_2' element={<Step2/>}/>
            <Route path='/korak_3' element={<Step3/>}/>
            <Route path='/korak_4' element={<Step4/>}/>
            <Route path='/konfirmacija' element={<FinishConfirmation/>}/>
          </Routes>
        </Router> 
    </div>
  );
}

export default App;

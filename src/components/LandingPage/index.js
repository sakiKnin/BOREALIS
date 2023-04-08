import React  from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import {ReactComponent as Pic} from '../../assets/picture_1.svg'

const LandingPage = ( ) => {

  const navigate = useNavigate();

  const goToStep_1 = () => {
    console.log("go to step one");
    setTimeout(() => navigate(`/korak_1`), 0)

  }
 
  return (
    <div className="landing-page">
	    <Header  />
      <div className="init-section"> 
        <Pic/>
        <div className="init-text">Pritisnite gumb niže kako biste pokrenuli</div>
        <button className="init-btn" onClick={()=>goToStep_1()}>Pokreni konfigurator</button>
      </div>
    </div>
  )
}

export default LandingPage

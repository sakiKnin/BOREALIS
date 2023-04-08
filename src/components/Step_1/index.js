import React, {useState, useEffect}  from 'react'
import './index.css'
import { useNavigate, useLocation } from 'react-router-dom'
import {ReactComponent as Close} from '../../assets/close.svg'
 

const Step_1 = ( ) => {

  const [isForward, setIsForward] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const [manufacturer, setManufacturer] = useState(location.state!==null?location.state.manId:'');

  const handleCancle = () => {
    setTimeout(() => navigate('/'), 0)
  }

  const handleForward = () => {
    setTimeout(() => navigate('/korak_2',{state:{manId:manufacturer,arrService:location.state!==null?location.state.arrService:[],total:location.state!==null?location.state.total:0}}), 0)
  }

  const handleChange = (e) => {
    console.log("handle change")
    console.log(e.target.value);
    setIsForward(true);
    setManufacturer(e.target.value);
  }

  useEffect(()=>{
    console.log(manufacturer)
    console.log(location.state)
    if(manufacturer!==''){
      var ele = document.getElementById(manufacturer);
      ele.checked=true;
      setIsForward(true);
    }
  },[])

  return (
    <div className="step">
      <div className="conf-modal-step1">
        
        <div className="conf-modal-header">
          <div className="step-1-title">Konfigurator Servisa</div>
          <Close className="close-btn" onClick={()=>handleCancle()}/>
        </div>
        <div>
          <legend><span>Korak 1.</span> Odaberite proizvođača vozila</legend>
          <div className="step-1-list">
            <ul className="step1-row1-list">
              <li>
                <input type="radio" 
                      id="Peugeot" 
                      name="car" 
                      value="Peugeot" 
                      onChange={(e)=>handleChange(e)}/>
                <label>Peugeot</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Volkswagen" 
                        name="car" 
                        value="Volkswagen" 
                        onChange={(e)=>handleChange(e)}/>
                <label  >Volkswagen</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Citroen" 
                        name="car" 
                        value="Citroen" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Citroen</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Audi" 
                        name="car" 
                        value="Audi" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Audi</label>
              </li>
            </ul>
            <ul className="step1-row2-list">
              <li>
                <input  type="radio" 
                        id="BMW" 
                        name="car" 
                        value="BMW" 
                        onChange={(e)=>handleChange(e)}/>
                <label>BMW</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Seat" 
                        name="car" 
                        value="Seat" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Seat</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Alfa Romeo" 
                        name="car" 
                        value="Alfa Romeo" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Alfa Romeo</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Kia" 
                        name="car" 
                        value="Kia" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Kia</label>
              </li>
            </ul>
            <ul className="step1-row3-list">
              <li>
                <input  type="radio" 
                        id="Hyundai" 
                        name="car" 
                        value="Hyundai" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Hyundai</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Honda" 
                        name="car" 
                        value="Honda" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Honda</label>
              </li>
              <li>
                <input  type="radio" 
                        id="Toyota" 
                        name="car" 
                        value="toyota" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Toyota</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-group-step1">
          <button className="cancle-btn" onClick={()=>handleCancle()}>Odustani</button>
          <button className="forward-btn" id="forwardBtn" onClick={()=>handleForward()} disabled={!isForward}>Dalje</button>
        </div>
      </div>
    </div>
  )
}

export default Step_1

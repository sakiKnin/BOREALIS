import React, {useState, useEffect}  from 'react'
import './index.css'
import { useNavigate ,useLocation } from 'react-router-dom'
import {ReactComponent as Close} from '../../assets/close.svg'

 

const Step_3 = ( ) => {


  const navigate = useNavigate();
  const location = useLocation();

  const [isForward, setIsForward] = useState(false);
  const [name, setName] = useState(location.state.userData!==undefined?location.state.userData.name:'');
  const [email, setEmail] = useState(location.state.userData!==undefined?location.state.userData.email:'');
  const [phone, setPhone] = useState(location.state.userData!==undefined?location.state.userData.phone:'');
  const [info, setInfo] = useState(location.state.userData!==undefined?location.state.userData.info:'');
   
  

  const handleCancle = () => {
    setTimeout(() => navigate('/korak_2',{state:{total:location.state.total,manId:location.state.manId,arrService:location.state.arrService}}), 0)
  }

  const handleForward = () => {
    setTimeout(() => navigate('/korak_4',{state:{total:location.state.total,manId:location.state.manId,arrService:location.state.arrService,isCuponValid:location.state.isCuponValid,userData:{name:name,email:email,phone:phone,info:info}}}), 0)
  }

  const handleChange = (e) => {
    console.log(e.target.name)
    switch (e.target.name){
        case 'name':
          setName(e.target.value);
          break;
        case 'info':
          setInfo(e.target.value);
          break;
        case 'email':
          setEmail(e.target.value);
          break;
        case 'phone':
          setPhone(e.target.value);
          break;
        default:
          break;
    }
  }

  useEffect(()=>{
    if(name===''||email===''||phone===''){
      setIsForward(false)
    }else{
      setIsForward(true)
    }

  },[name,email,phone])


  return (
    <div className="step">
    <div className="conf-modal-step3">
      <div className="conf-modal-header">
        <div className="step-1-title">Konfigurator Servisa</div>
        <Close className="close-btn" onClick={()=>handleCancle()}/>
      </div>
      <div>
        <legend><span>Korak 3.</span> Vaši podaci</legend>
       
        <ul className="step3-list">
              <li className="step3-list-row">
              <label id="label">Ime i prezime</label>
                <input type="text" 
                      id="name" 
                      name="name" 
                      className="input-step3"
                      value={name}
                      onChange={(e)=>handleChange(e)}/>
              </li>
              <li className="step3-list-row">
              <label id="label">Email adresa</label>
                <input  type="email" 
                        id="email" 
                        name="email" 
                        className="input-step3"
                        value={email}
                        onChange={(e)=>handleChange(e)}/>
              </li>
              <li className="step3-list-row">
              <label id="label">Broj telefona</label>
                <input  type="text" 
                        id="phone" 
                        name="phone" 
                        className="input-step3"
                        value={phone}
                        onChange={(e)=>handleChange(e)} />
              </li>
              <li className="step3-list-row">
              <label id="label">Napomena (opcionalno)</label>
                <textarea   
                        id="info" 
                        name="info" 
                        value={info}
                        onChange={(e)=>handleChange(e)}/>  
              </li>
            </ul>
         
      </div>
      <div className="btn-group-step2">
        <button className="cancle-btn" onClick={()=>handleCancle()}>Nazad</button>
        <button className="forward-btn" id="forwardBtn" onClick={()=>handleForward()} disabled={!isForward}>Dalje</button>
      </div>
    </div>
  </div>
  )
}

export default Step_3

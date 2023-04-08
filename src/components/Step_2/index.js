import React, {useState, useEffect}  from 'react'
import './index.css'
import { useNavigate ,useLocation } from 'react-router-dom'
import {ReactComponent as Close} from '../../assets/close.svg'

const Step_2 = ( ) => {

  const [dict, setDict] = useState({"oilFilter":false,"brakePadChange":false,"tireChange":false,"climFix":false,"tireBalance":false,"oilChange":false});
  const [dictPrice, ] = useState({"oilFilter":65,"brakePadChange":60,"tireChange":15,"climFix":40,"tireBalance":7,"oilChange":30});
  const [isForward, setIsForward] = useState(false);
  
  const [cuponCode, setCuponCode] = useState('');
  const [isCupon, setIsCupon] = useState(false);
  const [isCuponValid, setIsCuponValid] = useState(false);
  
  const location = useLocation();
  const [total, setTotal] = useState(location.state.total!==undefined?location.state.total:0); 
  const [arr, setArr] = useState(location.state.arrService!==undefined?location.state.arrService:[]);

  const navigate = useNavigate();

  const handleCancle = () => {
    setTimeout(() => navigate('/korak_1',{state:{manId:location.state.manId}}), 0)
  }

  const handleForward = () => {
    setTimeout(() => navigate('/korak_3',{state:{total:total,manId:location.state.manId,arrService:arr, isCuponValid:isCuponValid}}), 0)
  }

  const handleChange = (e) => {
        console.log(e.target.name+" : "+e.target.value)
        var tempDict = dict;
        tempDict[e.target.name]=!tempDict[e.target.name];
        setDict(tempDict);

        var tmpArr=arr;
        if(tempDict[e.target.name]){
          setTotal(total+dictPrice[e.target.name])
          tmpArr.push(e.target.name);
        }else{
          setTotal(total-dictPrice[e.target.name])
          tmpArr=tmpArr.filter(item=>item!==e.target.name)
        }
        setArr(tmpArr)
  }

  useEffect(()=>{
    if(total>0){
      setIsForward(true);
      var tempDict = dict;
      for(let i=0;i<arr.length;i++){
        let ele=document.getElementById(arr[i]);
        if(!ele.checked){
          ele.checked=true;
          tempDict[arr[i]]=true;
        }
      }
      setDict(tempDict)
    }else{
      setIsForward(false);
    }
     
  },[total])

  const handleCupon = () =>{
      setIsCupon(isCupon => !isCupon)

  }

  const handleCuponInput = (e) =>{
      setCuponCode(e.target.value);
  }

  const handleCuponSubmit = (e) => {
        if(e.target.checked&&cuponCode!=='Tokic123'){
          alert("Unjeli ste pogrešan kod!")  
          e.target.checked=false;
          setIsCuponValid(false);
        }else{
          setIsCuponValid(true);
        } 
  }

  return (
    <div className="step">
    <div className="conf-modal-step2">
      <div className="conf-modal-header">
        <div className="step-1-title">Konfigurator Servisa</div>
        <Close className="close-btn" onClick={()=>handleCancle()}/>
      </div>
      <div>
        <legend><span>Korak 2.</span> Odaberite jednu ili više usluga koje trebate</legend>
        <div className="step-1-list">
        <ul className="step1-row1-list">
              <li>
                <input type="checkbox" 
                      id="oilFilter" 
                      name="oilFilter" 
                      value="65"
                      onChange={(e)=>handleChange(e)}/>
                <label>Zamjena ulja i filtera <span>(65€)</span></label>
              </li>
              <li>
                <input  type="checkbox" 
                        id="brakePadChange" 
                        name="brakePadChange" 
                        value="60" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Promjena pakni <span>(60€)</span></label>
              </li>
              <li>
                <input  type="checkbox" 
                        id="tireChange" 
                        name="tireChange" 
                        value="15" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Promjena guma <span>(15€)</span></label>
              </li>
             
            </ul>
            <ul className="step1-row2-list">
              <li>
                <input  type="checkbox" 
                        id="climFix" 
                        name="climFix" 
                        value="40" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Servis klima uređaja <span>(40€)</span></label>
              </li>
              <li>
                <input  type="checkbox" 
                        id="tireBalance" 
                        name="tireBalance" 
                        value="7" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Balansiranje guma <span>(7€)</span></label>
              </li>
              <li>
                <input  type="checkbox" 
                        id="oilChange" 
                        name="oilChange" 
                        value="30" 
                        onChange={(e)=>handleChange(e)}/>
                <label>Zamjena ulja na kotačima <span>(30€)</span></label>
              </li>
            
            </ul>
        </div>
      </div>
      <div className="step-2-total">
        <div className="cupon-section">
          <button className="btn-cupon" onClick={()=>handleCupon()}>imam kupon</button>
          {isCupon&&<div className="input-cupon-section">
            <input type="text" className="input-cupon" onChange={(e)=>handleCuponInput(e)}/>
            <input type="checkbox" className="input-cupon-checkbox" onChange={(e)=>handleCuponSubmit(e)}/>
          </div> }
        </div>
        <div className="total"><div>UKUPNO:</div><span>{total}€</span></div>
      </div> 
      <div className="btn-group-step2">
        <button className="cancle-btn" onClick={()=>handleCancle()}>Nazad</button>
        <button className="forward-btn" id="forwardBtn" onClick={()=>handleForward()} disabled={!isForward}>Dalje</button>
      </div>
    </div>
  </div>
  )
}

export default Step_2

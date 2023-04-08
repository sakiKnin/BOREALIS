import React, {useState, useEffect}  from 'react'
import './index.css'
import { useNavigate ,useLocation } from 'react-router-dom'
import {ReactComponent as Close} from '../../assets/close.svg'
import {ReactComponent as Pen} from '../../assets/pen.svg'
 

const Step_4 = ( ) => {

  const [dictDescription, ] = useState({"oilFilter":"Zamjena ulja i filtera","brakePadChange":"Promjena pakni","tireChange":"Promjena guma","climFix":"Servis klima uređaja","tireBalance":"Balansiranje guma","oilChange":"Zamjena ulja na kočnicama"});
  const [dictPrice, ] = useState({"oilFilter":65,"brakePadChange":60,"tireChange":15,"climFix":40,"tireBalance":7,"oilChange":30});

  const location = useLocation();

  const [total, ] = useState(location.state.total);

  const navigate = useNavigate();

  const handleCancle = () => {
    setTimeout(() => navigate('/korak_3',{state:{total:total,arrService:location.state.arrService,manId:location.state.manId,userData:location.state.userData}}), 0)
  }

  const handleForward = () => {
    setTimeout(() => navigate('/konfirmacija'), 0)
  }

  const handleType = () => {
    setTimeout(() => navigate('/korak_1',{state:{manId:location.state.manId,total:total,arrService:location.state.arrService, total:total}}), 0)  
  }

  const handleService = () => {
    setTimeout(() => navigate('/korak_2',{state:{manId:location.state.manId,total:total,arrService:location.state.arrService}}), 0)  
  }
  const handleUserInfo = () => {
    setTimeout(() => navigate('/korak_3',{state:{total:total,arrService:location.state.arrService,manId:location.state.manId,userData:location.state.userData}}), 0)  
  }

  return (
    <div className="step">
    <div className="conf-modal-step4">
      <div className="conf-modal-header">
        <div className="step-1-title">Konfigurator Servisa</div>
        <Close className="close-btn" onClick={()=>handleCancle()}/>
      </div>
      <div>
        <legend><span>Korak 4.</span> Pregled i potvrda vašeg odabira</legend>
        <p className="step4-info">
          Molimo vas da još jednom pregledate i potvrdite podatke. 
          Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. 
          Kada ste provjerili ispravnost svojih podataka, za slanje upita na servis pritisnite gumb “Pošalji” koji se nalazi na dnu.
        </p>  
      </div>
      <div className="cart">
        <ul className="step4-list">
          <li className="label-header"><span>Model vozila</span><div className="edit" onClick={()=>handleType()}>Uredi <Pen/></div></li>
          <li>{location.state.manId}</li>
        </ul>
        <hr style={{width:'100%'}}></hr>
        <ul className="step4-list">
          <li className="label-header"><span>Odabrane usluge</span><div className="edit" onClick={()=>handleService()}>Uredi<Pen/></div></li>
          <li>
            <ul className="service-info-step4">
              {location.state.arrService.map((item,id)=><li className="service-row-info" key={id}><span className="service-row-label">{dictDescription[item]}</span><span className="service-row-value">{dictPrice[item]}€</span></li>)}
              {location.state.isCuponValid?<li className="service-row-info"><div></div><div><span className="service-row-label1">Popust 30%: </span><span className="service-row-value">-{(0.3*total).toFixed(2)}€</span></div></li>:null}
              {location.state.isCuponValid?<li className="service-row-info"><div></div><div><span className="service-row-label1">Ukupno: </span><span>{(0.7*total).toFixed(2)}€</span></div></li>:
              <li className="service-row-info"><div></div><div><span className="service-row-label1">Ukupno: </span><span>{total}€</span></div></li>}
            </ul>
          </li>
        </ul>
        <hr style={{width:'100%'}}></hr>
        <ul className="step4-list">
          <li className="label-header"><span>Kontakt podaci</span><div className="edit" onClick={()=>handleUserInfo()}>Uredi <Pen/></div></li>
          <li>
            <ul className="contact-info-step4">
              <li className="contact-row-info"><span className="contact-row-label">Ime i prezime: </span><span className="contact-value">{location.state.userData.name}</span></li>
              <li className="contact-row-info"><span className="contact-row-label">Email adresa: </span><span className="contact-value">{location.state.userData.email}</span></li>
              <li className="contact-row-info"><span className="contact-row-label">Broj telefona: </span><span className="contact-value">{location.state.userData.phone}</span></li>
              <li className="contact-row-info"><span className="contact-row-label">Napomena: </span><span className="contact-value">{location.state.userData.info}</span></li>
            </ul>
          </li>
        </ul>

      </div>
      <div className="btn-group-step4">
        <button className="cancle-btn" onClick={()=>handleCancle()}>Nazad</button>
        <button className="forward-btn" id="forwardBtn" onClick={()=>handleForward()}>Pošalji</button>
      </div>
    </div>
  </div>
  )
}

export default Step_4

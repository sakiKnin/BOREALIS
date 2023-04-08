import React, {useState, useEffect}  from 'react'
import './index.css'
import { useNavigate  } from 'react-router-dom'
import {ReactComponent as Close} from '../../assets/close.svg'
import {ReactComponent as Success} from '../../assets/success.svg'
 
 

const FinishConfirmation = ( ) => {

  const navigate = useNavigate();

  const handleClose = () => {

    setTimeout(() => navigate('/'), 0)
  }


 

  return (
    <div className="step">
    <div className="conf-modal-finish">
      <div className="conf-modal-header">
        <div className="step-1-title">Konfigurator Servisa</div>
        <Close className="close-btn" onClick={()=>handleClose()}/>
      </div>
      <div className="finish-body">
      <Success/>
      <p className="finish-msg1">Vaša prijava je uspješno poslana</p>
      <p className="finish-msg2">Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u najkraćem mogućem roku. Hvala vam!</p>
      <div className="btn-finish">
        <button className="forward-btn" id="forwardBtn" onClick={()=>handleClose()}>Zatvori</button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default FinishConfirmation

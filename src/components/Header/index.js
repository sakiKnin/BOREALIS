import './index.css'

import Logo from '../../assets/logo.svg'
 

const Header = () => {

  return (
    <div className="header_logo">
		<div className="logo">
	  		<img src={Logo} alt='' />
			<div className="header_title_1">KONFIGUATOR SERVISA</div> 
	  	</div>
	  	<div className="header_title_2">Izračunajte trošak servisa</div>  
    </div>
  );
}

export default Header
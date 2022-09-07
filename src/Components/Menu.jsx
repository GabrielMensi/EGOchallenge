import React from "react";
import MenuLogo from '../Assets/Menu.png';
import '../Stylesheets/Menu.scss';

function Menu({setActiveModal, activeModal}) {
  return (
    <div 
      className="menu-container" 
      onClick={() => setActiveModal(()=> activeModal === 'active' ? 'inactive' : 'active')}>
        <p className="text-menu">Menú</p>
        <img src={MenuLogo} alt="Menu" className="menu-logo" />
    </div>
  )
}

export default Menu;
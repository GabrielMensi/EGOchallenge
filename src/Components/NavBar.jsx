import React, {useState} from "react";
import NavButton from "./NavButton";
import '../Stylesheets/NavBar.scss';
import Logo from '../Assets/Logo.svg';
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";

function NavBar() {

  const location = useLocation();
  const path = location.pathname;
  const [activeModal, setActiveModal] = useState('inactive');

  return (
    <div className="navbar-container">
      <div className="logo-model-container">
        <div className="logo-container">
          <Link to='/'>
            <img src={Logo} alt="Agencia EGO" className="logo" />
          </Link>
        </div>
        <Link to='/' style={{textDecoration: 'none'}}>
          <NavButton
          style={{borderBottom: path === `/` ? '4px solid #D0021B' : '4px solid transparent', color: path === `/` ? '#D0021B' : null }} 
          text='Modelos'
          path={path} />
        </Link>
        <NavButton
        style={{borderBottom: path !== `/` ? '4px solid #D0021B' : '4px solid transparent', color: path !== `/` ? '#D0021B' : null }} 
        text='Ficha de modelo'
        path={path} />
      </div>
      <Menu 
        setActiveModal={setActiveModal}
        activeModal={activeModal}/>
      <Modal
        activeModal={activeModal}
        setActiveModal={setActiveModal} />
    </div>
    )
};

export default NavBar;
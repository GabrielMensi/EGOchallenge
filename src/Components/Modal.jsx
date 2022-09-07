import React from "react";
import '../Stylesheets/Modal.scss';
import closeImg from '../Assets/Close.svg';

function Modal({ activeModal, setActiveModal }) {
  return (
    <div 
      className={activeModal === 'active' ? 'overlayON' : 'overlayOFF'} 
      onClick={() => setActiveModal(()=> activeModal === 'active' ? 'inactive' : 'active')}>
        <div className="modal-container">
          <div 
            className="close-container" 
            onClick={() => setActiveModal(()=> activeModal === 'active' ? 'inactive' : 'active')}>
              <button className="close-modal"> Cerrar </button>
              <img src={closeImg} alt="close" className="close-img" />
          </div>
          <span className="content-container">
            <p className="modal-text">Modelos</p>
            <p className="modal-text">Servicios y Accesorios</p>
            <p className="modal-text">Financiacion</p>
            <p className="modal-text">Reviews y Comunidad</p>
          </span>
          <span className="content-container">
            <p className="modal-text">Toyota Mobility Service</p>
            <p className="modal-text">Toyota Gazoo Racing</p>
            <p className="modal-text">Toyota Hibridos</p>
          </span>
          <span className="content-container">
            <p className="modal-text">Concesionarios</p>
            <p className="modal-text">Test Drive</p>
            <p className="modal-text">Contacto</p>
          </span>
          <span className="content-container-grey">
            <p className="modal-text">Actividades</p>
            <p className="modal-text">Servicios al Cliente</p>
            <p className="modal-text">Ventas Especiales</p>
            <p className="modal-text">Innovacion</p>
            <p className="modal-text">Prensa</p>
            <p className="modal-text">Acerca de...</p>
          </span>
      </div>
    </div>
  )
}

export default Modal;

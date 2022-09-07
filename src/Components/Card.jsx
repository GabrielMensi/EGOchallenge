import React from "react";
import '../Stylesheets/Card.scss';
import { Link } from "react-router-dom";

function Card(props) {

  return (
    <div className="card">
      <h3 className="car-name"> {props.name} </h3>
      <div className="model-price-container">
        <p className="car-model"> {props.model} </p>
        <p className="car-price"> {props.price} </p>
      </div>
      <img src={props.img} alt={props.name} className="car-img" />
      <Link to={`/${props.id}`} style={{textDecoration: 'none'}}>
        <div className="model-button">
          <p className="model-button-text">Ver Modelo</p>
        </div>
      </Link>
    </div>
  )
};

export default Card;
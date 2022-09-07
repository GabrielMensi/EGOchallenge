import React from "react";
import '../Stylesheets/CarDetail.scss';

function CarDetail(props) {

  return (
    <div className="car-detail-container" >
      <img src={props.img} alt={props.name} className="car-detail-img" />
      <div className="car-detail-description-container">
        <h3 className="car-detail-name">{props.name}</h3>
        <h2 className="car-detail-title">{props.title}</h2>
        <div className="car-detail-desription" dangerouslySetInnerHTML={{__html: props.description}}></div>
      </div>
    </div>
  )
}

export default CarDetail;
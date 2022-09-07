import React from "react";
import '../Stylesheets/HighLights.scss';

function HighLights(props){

  return (
    <div className="highlights-content">
      <img className="highlights-img" src={props.img} alt={props.title} />
      <div className="highlights-description">
        <h3 className="highlights-title">{props.title}</h3>
        <span className="highlights-text" dangerouslySetInnerHTML={{__html: props.content}}></span>
      </div>
    </div>
  )
};

export default HighLights;
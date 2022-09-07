import React from "react";
import '../Stylesheets/FilterButton.scss';


function FilterButton({ text, filter, style }) {

  return (
    <button 
    className={`filter-button-container`}
    onClick={filter}
    style= {style} >
       {text} 
    </button>
  );
};

export default FilterButton;


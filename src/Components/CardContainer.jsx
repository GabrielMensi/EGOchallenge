import React from "react";
import Card from "./Card";
import '../Stylesheets/CardContainer.scss';

function CardContainer({ cars }) {
  return (
    <div className="card-container">
      {cars.map((e)=> (
        <Card
        id={e.id}
        key={e.id}
        name={e.name}
        model={e.year + ' |'}
        price={'$' + e.price.toLocaleString()}
        img={e.photo} />
      ))}
      
    </div>
  )
}

export default CardContainer;
import React, {useState} from "react";
import FilterButton from "./FilterButton";
import '../Stylesheets/SearchBar.scss';
import orderImg from '../Assets/Order.svg';


function SearchBar(props) {

  const [order, setOrder] = useState(false);
  const [filter, setFilter] = useState(false);


  return (
    <div className="searchbar-container">
      <div className="filter-container">
        <p className="search-text">Filtrar por</p>
        <FilterButton
          style={{backgroundColor: props.filterValue === 'all' ? '#F7F7F7' : null }} 
          text='Todos'
          filter={props.filterAll} />
        <FilterButton
          style={{backgroundColor: props.filterValue === 'sedan' ? '#F7F7F7' : null }} 
          text='Autos'
          filter= {props.filterSedan} />
        <FilterButton 
          style={{backgroundColor: props.filterValue === 'pickups' ? '#F7F7F7' : null }} 
          text='Pickups y comerciales'
          filter= {props.filterPickUpsComerciales} />
        <FilterButton 
          style={{backgroundColor: props.filterValue === 'suvs' ? '#F7F7F7' : null }} 
          text='SUVs y crossovers'
          filter= {props.filterSuvsCrossovers} />
      </div>

      <div className="dropdown-container mobile" onClick={() => setFilter(!filter)}>
        <p className="dropdown-button-text">Filtrar por</p>
        { filter ? <img src={orderImg} alt="ordenar" className="dropdown-img close" /> : <img src={orderImg} alt="ordenar" className="dropdown-img open" /> } 
        { filter ? 
        <div className="dropdown-button-container">
          <button
            className='dropdown-button'
            style={{backgroundColor: props.filterValue === 'all' ? 'rgba(209, 214, 214, 0.2)' : null }} 
            onClick={props.filterAll}>Todos</button>
          <button
            className='dropdown-button' 
            style={{backgroundColor: props.filterValue === 'sedan' ? 'rgba(209, 214, 214, 0.2)' : null }} 
            onClick={props.filterSedan}>Autos</button>
          <button
            className='dropdown-button'
            style={{backgroundColor: props.filterValue === 'pickups' ? 'rgba(209, 214, 214, 0.2)' : null }}  
            onClick={props.filterPickUpsComerciales}>Pickups y Comerciales</button>
          <button 
            className='dropdown-button'
            style={{backgroundColor: props.filterValue === 'suvs' ? 'rgba(209, 214, 214, 0.2)' : null }}  
            onClick={props.filterSuvsCrossovers}>SUVs y Crossovers</button>
        </div>
        : null
        }
      </div>

      <div className="dropdown-container" onClick={() => setOrder(!order)}>
        <p className="dropdown-button-text">Ordernar por</p>
        { order ? <img src={orderImg} alt="ordenar" className="dropdown-img close" /> : <img src={orderImg} alt="ordenar" className="dropdown-img open" /> } 
        { order ? 
        <div className="dropdown-button-container">
          <button
            className='dropdown-button'
            style={{backgroundColor: props.orderValue === 'all' ? 'rgba(209, 214, 214, 0.2)' : null }} 
            onClick={props.filterAll}>Nada</button>
          <button
            className='dropdown-button' 
            style={{backgroundColor: props.orderValue === 'cheap' ? 'rgba(209, 214, 214, 0.2)' : null }} 
            onClick={props.cheap}>De <strong>menor</strong> a <strong>mayor</strong> precio</button>
          <button
            className='dropdown-button'
            style={{backgroundColor: props.orderValue === 'expensive' ? 'rgba(209, 214, 214, 0.2)' : null }}  
            onClick={props.expensive}>De <strong>mayor</strong> a <strong>menor</strong> precio</button>
          <button 
            className='dropdown-button'
            style={{backgroundColor: props.orderValue === 'new' ? 'rgba(209, 214, 214, 0.2)' : null }}  
            onClick={props.new}>Más <strong>nuevos</strong> primero</button>
          <button 
          className='dropdown-button' 
          style={{backgroundColor: props.orderValue === 'old' ? 'rgba(209, 214, 214, 0.2)' : null }} 
          onClick={props.old}>Más <strong>viejos</strong> primero</button>
        </div>
        : null
        }
      </div>
    </div>
  )
};

export default SearchBar;
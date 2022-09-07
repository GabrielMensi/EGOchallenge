import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';
import '../Stylesheets/Home.scss';


export default function Home() {
  const value = {
    all : 'all',
    sedan : 'sedan',
    pickups : 'pickups',
    suvs : 'suvs',
    cheap: 'cheap',
    expensive: 'expensive',
    old: 'old',
    new: 'new'
  };
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [orderValue, setOrderValue] = useState(value.all);
  const [filterValue, setFilterValue] = useState(value.all);

  const url = 'https://challenge.agenciaego.tech/api/models/';

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCars(data);
    setAllCars(data);
  };
  
  const getCars =  () => {
    setFilterValue(value.all);
    setOrderValue(value.all);
    setCars(allCars);
  };

  useEffect(() => {
    getData()
  }, []);
  
  //FILTERS

  const filterSedan = () => {
    const sedan = allCars.filter(e => e.segment === 'Sedan' || e.segment === 'Hatchback');
    setCars(sedan);
    setFilterValue(value.sedan);
  };

  const filterPickUpsComerciales = () => {
    const pickUpsComerciales = allCars.filter(e => e.segment === 'Pickups y Comerciales');
    setCars(pickUpsComerciales);
    setFilterValue(value.pickups);
  };

  const filterSuvsCrossovers = () => {
    const suvsCrossovers = allCars.filter(e => e.segment === 'SUVs');
    setCars(suvsCrossovers);
    setFilterValue(value.suvs);
  };

  //ORDER
  const cheap = () => {
    const cheapest = [...cars];
    cheapest.sort((a,b) => a.price - b.price);
    setCars(cheapest);
    setOrderValue(value.cheap);
  };
  const expensive = () => {
    const expensives = [...cars];
    expensives.sort((a,b) => b.price - a.price);
    setCars(expensives);
    setOrderValue(value.expensive);
  };
  const newest = () => {
    const news = [...cars];
    news.sort((a,b) => b.year - a.year)
    setCars(news);
    setOrderValue(value.new);
  };
  const old = () => {
    const olds = [...cars];
    olds.sort((a,b) => a.year - b.year)
    setCars(olds);
    setOrderValue(value.old);
  };

  return (
    <div className='home-container'>
      <h1 className='home-title'>Descubrí todos los modelos</h1>
      <SearchBar 
      filterAll = {getCars}
      filterSedan = {filterSedan}
      filterPickUpsComerciales = {filterPickUpsComerciales}
      filterSuvsCrossovers = {filterSuvsCrossovers}
      cheap = {cheap}
      expensive = {expensive}
      new = {newest}
      old = {old}
      orderValue = {orderValue}
      filterValue = {filterValue}
       />
      <CardContainer 
      cars = {cars} />
    </div>
  )
}

import React, {useState, useEffect} from 'react';
import CarDetail from './CarDetail';
import HighLights from './HighLights';
import { useParams } from 'react-router-dom';
import '../Stylesheets/Detail.scss';
import Slider from './Slider';

export default function Detail() {

  const [detail, setDetail] = useState([]);
  const [features, setFeatures] = useState([]);
  const [highlights, setHighlights] = useState([]);

  const {id} = useParams();
  const url = `https://challenge.agenciaego.tech/api/models/${id}`;

  const getCarDetail = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDetail(data)
    setFeatures(data.model_features)
    setHighlights(data.model_highlights)
  };

  useEffect(() => {
    getCarDetail(id)
  }, []);

  return (
    <div className='detail-main-container'>
      <CarDetail
        img = {detail.photo}
        name={detail.name}
        title={detail.title}
        description={detail.description} />
      <div className="slider">
        <Slider
        features = {features} />
      </div>
      <div className="highlights-container">
        {highlights.map(e => (
          <HighLights
          key={e.title}
          title={e.title}
          img={e.image}
          content={e.content} />
        ))}
      </div>
    </div>
  )
}

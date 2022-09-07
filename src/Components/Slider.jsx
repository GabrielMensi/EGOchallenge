import React from "react";
import { Navigation, Pagination, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Stylesheets/Slider.scss';

function Slider({ features }) {
  return (
    <Swiper
    modules={[Navigation, Pagination, A11y]}
    loop={true}
    spaceBetween={0}
    breakpoints= {{
      2550: {
        slidesPerView: 7, 
      },
      1439 : {
        slidesPerView: 5, 
      },
      1023 : {
        slidesPerView: 3, 
      },
      767 : {
        slidesPerView: 2, 
      },
      374 : {
        slidesPerView: 1, 
      }
    }}
    navigation
    pagination={{ clickable: true }}
  >
    {features.map( e => (
      <SwiperSlide className="slide-container" key={e.name + 'a'}>
        <img src={e.image} alt={e.name} className="slider-img" />
        <div className="slide-text-container">
          <h3 className="slider-name">{e.name}</h3>
          <p className="slider-description">{e.description}</p>
        </div>
      </SwiperSlide>
    ))}
      {features.map( e => (
      <SwiperSlide className="slide-container" key={e.name + 'b'}>
        <img src={e.image} alt={e.name} className="slider-img" />
        <div className="slide-text-container">
          <h3 className="slider-name">{e.name}</h3>
          <p className="slider-description">{e.description}</p>
        </div>
      </SwiperSlide>
    ))}
      {features.map( e => (
      <SwiperSlide className="slide-container" key={e.name + 'c'}>
        <img src={e.image} alt={e.name} className="slider-img" />
        <div className="slide-text-container">
          <h3 className="slider-name">{e.name}</h3>
          <p className="slider-description">{e.description}</p>
        </div>
      </SwiperSlide>
    ))}
    
  </Swiper>
  )
}

export default Slider;
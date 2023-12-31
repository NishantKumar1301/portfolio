/* eslint-disable jsx-a11y/img-redundant-alt */
import Bhaiya from '../../assests/b.jpg'
import Bhaiya2 from '../../assests/c.jpg'
import './testinomials.css'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testinomials = () => {
  return (
    <section id="testinomials">
      <h5>Review from clients</h5>
      <h2>Testinomials</h2>

      <Swiper
        className="container testinomials__container" 
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testinomial">
          <div className="client__avatar">
            <img src={Bhaiya} alt="bhaiya-image" />
          </div>
          <h5 className="client__name">Pushpam kumar</h5>
          <small className="client__review">
            The app was designed in a very responsive manner with the proper use
            of React,Node js and mongodb
          </small>
        </SwiperSlide>

        <SwiperSlide className="testinomial">
          <div className="client__avatar">
            <img src={Bhaiya2} alt="bhaiya-image" />
          </div>
          <h5 className="client__name">Pushpam kumar</h5>
          <small className="client__review">
            The app was designed in a very responsive manner with the proper use
            of Html , Css and Java Script.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default Testinomials
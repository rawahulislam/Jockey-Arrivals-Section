import React from 'react';
import "./ProductCarousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';



export default function App() {
  return (
    <div className='arrivals-container'>
      <div className='width-controller'>
      <div className='heading-selection-box'>
        <div className='heading-box' >
      <div className='arrivals-heading'>
        Just Arrived
      </div>
      <div className='arrivals-subheading'>
        New arrivals, new you
      </div>
      </div>
      <div className='select-gender-box'>
        <div className='box-selection'>
        <div className='box-tab btn-active-arrivals'>
          Men
        </div>
        <div className='box-tab'>
          Women
        </div>
        </div>

      </div>
      
      </div>
      <div className='useless-box-container'>
        <div className='left-side-box'>
      <div className='box-useless-left-1'>
        <div className='box-before'></div>

      </div>
      <div className='box-useless-left-2'>
        <div className='box-before'></div>

      </div>
      </div>
      <div className='right-side'>
      <div className='box-useless-right-1'>
        <div className='box-before'></div>

      </div>
      <div className='box-useless-right-2'>
        <div className='box-before'></div>

      </div>
      </div>
      </div>
      <div className='swiper-container'>
      <Swiper
      navigation={true}
      loop={true}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 190,
          },
          1024: {
            slidesPerView: window.innerWidth >= 1024 ? 3 : 4, 
            spaceBetween: 10,
          },
          1240: {
            slidesPerView: 4, 
            spaceBetween: 10,
          },
         
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='imgContainerSlider'><img className='img-slider' src='https://www.jockey.in/cdn/shop/files/IM35_1.webp?v=1715280261&width=475' alt='im'/>
        <div className='card-bottom-chip'>
          <h3 className='card-text'>
            lorem ipsum lorem ipsum
          </h3>
          <div className='card-box'>
            <h4 className='id-txt'>#LM02</h4>
            <h4 className='card-btn'>Explore</h4>
          </div>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='imgContainerSlider'><img className='img-slider' src='https://www.jockey.in/cdn/shop/files/IM35_1.webp?v=1715280261&width=475'alt='im'/>
        <div className='card-bottom-chip'>
          <h3 className='card-text'>
            lorem ipsum lorem ipsum
          </h3>
          <div className='card-box'>
            <h4 className='id-txt'>#LM02</h4>
            <h4 className='card-btn'>Explore</h4>
          </div>
        </div></div></SwiperSlide>
        <SwiperSlide><div className='imgContainerSlider'><img className='img-slider' src='https://www.jockey.in/cdn/shop/files/IM35_1.webp?v=1715280261&width=475'alt='im'/>
        <div className='card-bottom-chip'>
          <h3 className='card-text'>
            lorem ipsum lorem ipsum
          </h3>
          <div className='card-box'>
            <h4 className='id-txt'>#LM02</h4>
            <h4 className='card-btn'>Explore</h4>
          </div>
        </div></div></SwiperSlide>
        <SwiperSlide><div className='imgContainerSlider'><img className='img-slider' src='https://www.jockey.in/cdn/shop/files/IM35_1.webp?v=1715280261&width=475'alt='im'/>
        <div className='card-bottom-chip'>
          <h3 className='card-text'>
            lorem ipsum lorem ipsum
          </h3>
          <div className='card-box'>
            <h4 className='id-txt'>#LM02</h4>
            <h4 className='card-btn'>Explore</h4>
          </div>
        </div></div></SwiperSlide>
        <SwiperSlide><div className='imgContainerSlider'><img className='img-slider' src='https://www.jockey.in/cdn/shop/files/IM35_1.webp?v=1715280261&width=475'alt='im'/>
        <div className='card-bottom-chip'>
          <h3 className='card-text'>
            lorem ipsum lorem ipsum
          </h3>
          <div className='card-box'>
            <h4 className='id-txt'>#LM02</h4>
            <h4 className='card-btn'>Explore</h4>
          </div>
        </div></div></SwiperSlide>
        <SwiperSlide><div className='imgContainerSlider'><img className='img-slider' src='https://www.jockey.in/cdn/shop/files/IM35_1.webp?v=1715280261&width=475'alt='im'/>
        <div className='card-bottom-chip'>
          <h3 className='card-text'>
            lorem ipsum lorem ipsum
          </h3>
          <div className='card-box'>
            <h4 className='id-txt'>#LM02</h4>
            <h4 className='card-btn'>Explore</h4>
          </div>
        </div></div></SwiperSlide>

      </Swiper>
      </div>
      </div>
    </div>
  )
}

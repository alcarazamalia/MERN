import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import SlideCarousel from '../SlideCarousel/SlideCarousel';
import carouselData from './carouselData';


const Carousel1 = () => {
  return (
    <div className='CarouselPics'>
      <div className="textCarousel">
        <h1>POPULAR MY TINERARYS</h1>
      </div>
      <Carousel>
        {carouselData.map((imageSet, index) => (
          <Carousel.Item key={index}>
            <SlideCarousel imageUrls={imageSet} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
 
export default Carousel1;
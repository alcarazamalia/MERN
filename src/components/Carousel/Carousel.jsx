import React from 'react'
//import BootstrapCarousel from 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import SlideCarousel from '../SlideCarousel/SlideCarousel';

const images = [
  [
{"url": "./img/amsterdam-paises-bajos-1.jpg", "name":"Amsterdam" },
{"url": "./img/barcelona-espana-1.jpg", "name":"Barcelona" },
{"url": "./img/beirut-libano.jpg", "name":"Beirut" },
{"url": "./img/brujas-belgica.jpg", "name":"Brujas" }
  ],
  [
  {"url": "./img/budapest-hungria-1.jpg", "name":"Budapest" },
  {"url": "./img/cartagena-colombia-1.jpg", "name":"Cartagena" },
  {"url": "./img/ciudad-del-cabo-sudafrica.jpg", "name":"Cuidad del Cabo" },
  {"url": "./img/estambul-turquia.jpg", "name":"Estambul" }
  ],
   [
  {"url": "./img/estocolmo-suecia.jpg", "name":"Estocolmo" },
  {"url": "./img/florencia-italia.jpg", "name":"Florencia" },
  {"url": "./img/hong-kong-china.jpg", "name":"Hong Kong" },
  {"url": "./img/la-habana-cuba.jpg", "name":"La Habana" }
   ]
]
const Carousel1 = () => {
  return (
    <div className='CarouselPics'>
      <div className="textCarousel">
        <h1>POPULAR MY TINERARYS</h1>
        </div>
    <Carousel>
      <Carousel.Item>
   
           <SlideCarousel imageUrls={images[0]}/>
            
      </Carousel.Item>

      <Carousel.Item>
   
   <SlideCarousel imageUrls={images[1]}/>
    
</Carousel.Item>
<Carousel.Item>
   
   <SlideCarousel imageUrls={images[2]}/>
    
</Carousel.Item>


    </Carousel>
    </div>
  );
}
export default Carousel1;
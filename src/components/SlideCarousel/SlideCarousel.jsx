import React from 'react';
import './SlideCarousel.css';

const SlideCarousel = ({ imageUrls }) => {
  return (
    
    <div className="containerImages">
      {imageUrls.map((imageUrl, index) => (
        // Agregar una clave única al nivel más alto del mapeo
        <div key={index} className="containerPic">
          <img src={imageUrl.url} alt={`Image ${index}`} />
          <div className='textCard'>
            <h3>{imageUrl.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideCarousel;

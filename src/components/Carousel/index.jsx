import { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images, autoSlide = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if(autoSlide) {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(slideInterval);
    }
  },[autoSlide, interval, nextSlide]);

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>
      <button className="carousel-arrow right" onClick={nextSlide}>&#10095;</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  )
};

export default Carousel;
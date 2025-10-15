import React, { useState, useEffect } from 'react';
import '../styles/CarSlider.css';

interface CarImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const CarSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Imágenes de ejemplo de autos con rines diamantados
  const carImages: CarImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'BMW con rines diamantados',
      title: 'BMW Serie 3 - Restauración Premium'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Mercedes-Benz con rines personalizados',
      title: 'Mercedes-Benz C-Class - Diamantado Exclusivo'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Audi con rines de lujo',
      title: 'Audi A4 - Transformación Total'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Porsche con rines deportivos',
      title: 'Porsche 911 - Estilo Deportivo'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Lexus con rines elegantes',
      title: 'Lexus IS - Elegancia Refinada'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, carImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    // Reactivar auto-play después de 10 segundos
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carImages.length) % carImages.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carImages.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section id="galeria" className="car-slider">
      <div className="container-slider">
        <div className="slider-container">
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carImages.map((car) => (
                <div key={car.id} className="slide">
                  <div className="slide-image-container">
                    <img 
                      src={car.src} 
                      alt={car.alt}
                      className="slide-image"
                      loading="lazy"
                    />
                    <div className="slide-overlay">
                      <h3 className="slide-title">{car.title}</h3>
                      <p className="slide-description">
                        Restauración completa con técnicas premium de diamantado
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            className="slider-btn slider-btn-prev"
            onClick={goToPrevious}
            aria-label="Imagen anterior"
          >
            &#8249;
          </button>
          <button 
            className="slider-btn slider-btn-next"
            onClick={goToNext}
            aria-label="Siguiente imagen"
          >
            &#8250;
          </button>

          {/* Dots indicator */}
          <div className="slider-dots">
            {carImages.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSlider;

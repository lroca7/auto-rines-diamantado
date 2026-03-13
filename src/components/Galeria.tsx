import React, { useState } from 'react';
import '../styles/Galeria.css';

// Import all gallery images
import rin1 from '../assets/images/galeria/rin1.jpeg';
import rin2 from '../assets/images/galeria/rin2.jpeg';
import rin3 from '../assets/images/galeria/rin3.jpeg';
import rin4 from '../assets/images/galeria/rin4.jpeg';
import rin6 from '../assets/images/galeria/rin6.jpeg';
import rin7 from '../assets/images/galeria/rin7.jpeg';
import rin8 from '../assets/images/galeria/rin8.jpeg';
import rin9 from '../assets/images/galeria/rin9.jpeg';
import rin10 from '../assets/images/galeria/rin10.jpeg';

const images = [
    { src: rin1, alt: 'Rin diamantado 1' },
    { src: rin2, alt: 'Rin diamantado 2' },
    { src: rin3, alt: 'Rin diamantado 3' },
    { src: rin4, alt: 'Rin diamantado 4' },
    { src: rin6, alt: 'Rin diamantado 6' },
    { src: rin7, alt: 'Rin diamantado 7' },
    { src: rin8, alt: 'Rin diamantado 8' },
    { src: rin9, alt: 'Rin diamantado 9' },
    { src: rin10, alt: 'Rin diamantado 10' },
];

const Galeria: React.FC = () => {
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

    const openLightbox = (img: { src: string; alt: string }) => setLightbox(img);
    const closeLightbox = () => setLightbox(null);

    return (
        <section id="galeria" className="galeria-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title galeria-title">Galería</h2>
                    <div className="galeria-title-bar"></div>
                    <p className="section-subtitle">
                        Conoce nuestro trabajo — cada rin, una obra de arte
                    </p>
                </div>

                <div className="galeria-grid">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="galeria-item"
                            onClick={() => openLightbox(img)}
                        >
                            <div className="galeria-img-wrapper">
                                <img src={img.src} alt={img.alt} className="galeria-img" />
                                <div className="galeria-overlay">
                                    <span className="galeria-overlay-icon">&#128269;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightbox && (
                <div className="galeria-lightbox" onClick={closeLightbox}>
                    <button className="galeria-lightbox-close" onClick={closeLightbox}>&#10005;</button>
                    <div className="galeria-lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={lightbox.src} alt={lightbox.alt} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Galeria;

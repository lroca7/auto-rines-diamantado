import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Diamantado Premium',
      description: 'Proceso especializado que da un acabado brillante y duradero a tus rines.',
      features: ['Acabado espejo', 'Resistencia superior', 'Protección UV'],
      icon: '💎'
    },
    {
      id: 2,
      title: 'Restauración Completa',
      description: 'Devolvemos la vida a rines dañados con técnicas profesionales.',
      features: ['Reparación estructural', 'Pulido especializado', 'Pintura de alta calidad'],
      icon: '🔧'
    },
    {
      id: 3,
      title: 'Personalización',
      description: 'Creamos diseños únicos según tus preferencias y estilo.',
      features: ['Diseños exclusivos', 'Colores personalizados', 'Acabados especiales'],
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Mantenimiento',
      description: 'Servicios de mantenimiento para conservar el brillo y calidad.',
      features: ['Limpieza profunda', 'Protección adicional', 'Inspección técnica'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Especialistas en restauración y diamantado de rines de lujo
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="#contacto" className="service-btn">
                Más Información
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

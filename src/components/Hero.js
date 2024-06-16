import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Support Our Fundraiser</h1>
          <p>Help those suffering from diseases by contributing through cryptocurrency. Your donations will make a significant difference in providing the necessary medical care and support.</p>
          <p>Together, we can make a positive impact on countless lives. Every contribution, no matter how small, helps us move closer to our goal.</p>
          <button className="cta-button">Donate Now</button>
        </div>
        <div className="image-content">
          <img src='https://img.freepik.com/premium-vector/doctor-s-visit-ward-patient-sick-person-is-medical-bed-drip-vector-illustration-flat-style_180264-178.jpg'alt="Fundraising" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

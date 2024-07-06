// import React from 'react'
import "../css/hero.css";

const Hero = () => {
  return (
    <>
      <section className="section section-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-heading">
            NextGen Quality To Drive Business Outcomes
          </h1>
          <p className="hero-para">
            Leverage Quality as a Service to drive business transformation,
            leading to Revenue Improvement, Enhanced Customer Experience,
            Reduced time to market at a lower cost.
          </p>
        </div>
        <div className="hero-more">
          <p>
            Know More About NextGen Quality&nbsp;{" "}
            <i className="fa-solid fa-arrow-down-long"></i>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;

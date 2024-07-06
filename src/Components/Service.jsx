import React from "react";
import PropTypes from "prop-types";
import "../css/service.css";

const Service = ({ servicedata }) => {
  // Animate Content

  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="section section-service">
        <div className="container">
          <h2 className="main-heading">
            Challenges NextGen Quality And Business Services
          </h2>
          <div className="service-main grid grid-two-columns">
            {servicedata.map((curele) => {
              return (
                <div className="service-box" key={curele.id}>
                  <i className={curele.icon}></i>
                  <h2 className="inner-heading">{curele.title}</h2>
                  <p className="inner-para">{curele.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Service.propTypes = {
  servicedata: PropTypes.array.isRequired,
};

export default Service;

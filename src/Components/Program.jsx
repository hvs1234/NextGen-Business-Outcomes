import React from "react";
import Navbar from "./Navbar";
import "../css/program.css";
import serviceData from "../API/ServiceAPI";
import Footer from "./Footer";

const Program = () => {
  // API
  // Service API
  const [programdata] = React.useState(serviceData);
  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Program Section */}

      <section className="section section-program">
        <div className="program-overlay"></div>
        <div className="container">
          <div className="program-content">
            <h1 className="program-heading about-heading">
              Innovative Solutions with NextGen PaaS
            </h1>
            <p className="program-para about-para">
              Delivers cutting-edge solutions that streamline operations,
              enhance flexibility, and drive innovation for transformative
              business outcomes in dynamic environments.
            </p>
          </div>
        </div>
      </section>

      {/* Program More */}

      <section className="section section-programmore">
        <div className="container">
          <h2 className="main-heading">
            Elevating Business with NextGen PaaS Solutions
          </h2>
          <div className="service-main program-main grid grid-two-columns">
            {programdata.map((curele) => {
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

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Program;

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/about.css";
import AboutmoreData from "../API/AboutmoreAPI";

const AboutPage = () => {
  // API
  //--------------------------------------------- About More API -------------------------------------------------

  const [aboutmoredata] = React.useState(AboutmoreData);

  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* About Page */}

      <section className="section section-aboutpage">
        <div className="about-overlay"></div>
        <div className="container">
          <div className="about-content">
            <h1 className="about-heading">
              Revolutionizing Business Standards with NextGen
            </h1>
            <p className="about-para">
              Redefining business standards to achieve unparalleled excellence
              and transformative results.
            </p>
          </div>
        </div>
      </section>

      {/* About Page More */}

      <section className="section section-aboutmore">
        <div className="container">
          <h2 className="main-heading">
            NextGen Vision: Our Path to Superior Outcomes
          </h2>
          <p className="main-para">
            With a forward-thinking approach, NextGen Vision leads us to
            superior business outcomes. By embracing innovation, data-driven
            decisions, and a commitment to excellence, we set new standards in
            quality and performance, driving sustainable growth and delivering
            exceptional value to our clients.
          </p>
          {aboutmoredata.map((e) => {
            return (
              <div className="aboutmore-content" key={e.id}>
                <h3 className="inner-heading">{e.title}</h3>
                <p className="inner-para">
                  <i className="fa-regular fa-share-from-square"></i>&nbsp;{" "}
                  {e.para}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default AboutPage;

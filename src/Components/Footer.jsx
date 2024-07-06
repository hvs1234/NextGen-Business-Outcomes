import React from "react";
import "../css/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

  // Animate Content

  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
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
      <section ref={sectionRef} className="section section-footer">
        <div className="container">
          <div className="f-main">
            <div className="f-logo">
              <p className="logo-name">
                <span>N</span>ext <span>G</span>en.
              </p>
              <p>Follow Us On</p>
              <div className="social-links">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="f-content">
              <div className="f-part">
                <h3>Our Links</h3>
                <div className="f-link">
                  <ul>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp; Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/about"}
                        onClick={handleOnClick("/about")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp; About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/program"}
                        onClick={handleOnClick("/program")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/contact"}
                        onClick={handleOnClick("/contact")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp; Book A
                        Meeting
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="f-part">
                <h3>About Us</h3>
                <div className="f-link">
                  <ul>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp; Values
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Community Guildlines
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="f-part">
                <h3>Legal Support</h3>
                <div className="f-link">
                  <ul>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Finance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp; Terms
                        And Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp; Demo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Part */}

      <div className="copyright">
        <p>
          <i className="fa-regular fa-copyright"></i>&nbsp; Copyright NextGen.
          2024 | All Right Reserved | IT Support By{" "}
          <a href="https://twomglobal.com" target="_blank">
            TWOM GLOBAL
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;

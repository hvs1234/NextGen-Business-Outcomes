import React from "react";
import "../css/about.css";

const About = () => {

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
      <section ref={sectionRef} className="section section-hero-about">
        <div className="container">
          <h2 className="main-heading">
            More About NextGen Quality Business&nbsp;{" "}
            <i className="fa-solid fa-bars-staggered"></i>
          </h2>
          <p className="main-para">
            QaaS fosters a culture of continuous improvement and transformation.
            It acts as centralized monitoring system is a cornerstone of
            effective vendor management. QaaS ensures consistent and predictable
            quality outcomes, building trust with clients and end-users alike.
          </p>
          <p className="main-para">
            It proactively identifies and address potential quality
            issues,minimizing the risk of costly disruptions. It ensures that
            the resources are allocated more efficiently, maximizing
            productivity and minimizing waste.
          </p>
          <p className="main-para">
            By leveraging advanced analytics, it provides actionable insights
            that drive continuous improvement across all processes. This
            proactive approach leads to better decision-making and strategic
            planning, allowing for the anticipation of potential challenges
            before they escalate.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

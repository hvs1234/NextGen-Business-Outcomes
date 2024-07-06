import React from "react";

import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import serviceData from "./API/ServiceAPI";
import Footer from "./Components/Footer";

const Home = () => {
  // API
  // ---------------------------------------------- Service API ---------------------------------------------

  const [servicedata] = React.useState(serviceData);

  return (
    <>
      {/* Header Section */}

      <Navbar />

      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <About />

      {/* Service Section */}

      <Service servicedata={servicedata} />

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Home;

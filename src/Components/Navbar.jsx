import React from "react";

import { Link } from "react-router-dom";
import "../css/nav.css";

const Navbar = () => {
  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

  // Sticky Navbar

  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header ${isSticky ? "sticky" : ""} ${
          isActive ? "active" : ""
        }`}
      >
        <div className="logo">
          <div className="mobile-navbar-btn" onClick={toggleNavbar}>
            <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
            <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
          </div>
          <Link onClick={handleOnClick("/")} className="logo-para" to={"/"}>
            <span>N</span>ext<span>G</span>en.
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link onClick={handleOnClick("/")} className="navlink" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOnClick("/about")}
                className="navlink"
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOnClick("/program")}
                className="navlink"
                to={"/program"}
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOnClick("/contact")}
                className="navlink book"
                to={"/contact"}
              >
                Book A Meeting
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

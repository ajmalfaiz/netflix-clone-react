import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll")
    }
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
        className="nav__logo"
      />
      <img className="nav__avatar" src="netflix.png" />
    </div>
  );
}

export default Nav;

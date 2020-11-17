import React from "react";
import "./footer.css";

function footer() {
  return (
    <div className="footer container-fluid d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <a href="https://www.linkedin.com/in/adrien-audebert/"><i className="fab fa-linkedin-in fa-2x p-3"></i></a>
        <a href="https://github.com/AudebertAdrien"><i className="fab fa-github fa-2x p-3"></i></a>
        <a href="mailto:audebertadrien.pro@gmail.com"><i className="far fa-envelope fa-2x p-3"></i></a>
      </div>

      <div className="row justify-content-center align-items-center">
        <i className="far fa-copyright fa-lg"></i>
        <span>Adrien Audebert</span>
      </div>
    </div>
  );
}

export default footer;

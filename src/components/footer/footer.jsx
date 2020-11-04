import React from "react";
import "./footer.css";

function footer() {
  return (
    <div className="footer container-fluid d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <i class="fab fa-linkedin-in fa-2x p-3"></i>
        <i class="fab fa-github fa-2x p-3"></i>
        <i class="far fa-envelope fa-2x p-3"></i>
      </div>

      <div className="row justify-content-center">
        <i class="far fa-copyright fa-lg"></i>
        <span>Adrien Audebert</span>
      </div>
    </div>
  );
}

export default footer;

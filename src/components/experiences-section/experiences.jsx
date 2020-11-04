import React from "react";
import "./experiences.css";
import imageTest from "../../images/construction.png";

function experiences() {
  return (
    <div className="mt-3">
      <h3 className="text-center p-5">WHAT I'VE DONE</h3>
      <div className="d-flex flex-wrap justify-content-around">
        <div className="card-experiences card mb-5">
          <img src={imageTest} className="card-img-top" alt="imageTest" />
        </div>
        <div className="card-experiences card mb-5">
          <img src={imageTest} className="card-img-top" alt="imageTest" />
        </div>
        <div className="card-experiences card mb-5">
          <img src={imageTest} className="card-img-top" alt="imageTest" />
        </div>
        <div className="card-experiences card mb-5">
          <img src={imageTest} className="card-img-top" alt="imageTest" />
        </div>
        <div className="card-experiences card mb-5">
          <img src={imageTest} className="card-img-top" alt="imageTest" />
        </div>
        <div className="card-experiences card mb-5">
          <img src={imageTest} className="card-img-top" alt="imageTest" />
        </div>
      </div>
    </div>
  );
}

export default experiences;

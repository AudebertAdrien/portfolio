import React from "react";
import "./services.css";

function services() {
  return (
    <div className="services mt-3 text-center">
      <h3 className="p-5">WHAT I DO</h3>
      <div className="container">
        <div className="row">
          <div className="hide col-sm p-3 d-flex flex-column justify-content-center align-items-center">
            <i className="fas fa-code fa-4x p-3"></i>
            <p className="hide-item">
              Creation of a web site | application, realized from a mockup and product specification
            </p>
          </div>
          <div className="hide col-sm p-3 d-flex flex-column justify-content-center align-items-center">
            <i className="fas fa-pencil-ruler fa-4x p-3"></i>
            <p className="hide-item">
            Compatible with any media, tablet &amp; mobile application
            </p>
          </div>
        </div>
        <div className="row">
          <div className="hide col-sm p-3 d-flex flex-column justify-content-center align-items-center">
            <i className="fas fa-book-reader fa-4x p-3"></i>
            <p className="hide-item">
              Improving the quality and quantity of website traffic with a optimized code and pays attention to accessibility.
            </p>
          </div>
          <div className="hide col-sm p-3 d-flex flex-column justify-content-center align-items-center">
            <i className="fas fa-link fa-4x p-3"></i>
            <p className="hide-item">
              Integrate and interact with APIs such as AWS or Google services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;

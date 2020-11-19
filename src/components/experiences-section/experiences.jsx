import React from "react";
import "./experiences.css";
import construction from "../../images/construction.png";
import crimesInLeicester from "../../images/crimes-in-leicester.png";
import weather from "../../images/weather.png";

function experiences() {
  return (
    <div className="container experiences mt-3 text-center ">
      <h3 className="p-5">WHAT I'VE DONE</h3>
      <div className="d-flex flex-wrap justify-content-around">

        {/* Construction website */}
        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img
                src={construction}
                className="card-img-top"
                alt="construction"
              />
              <div className="card-body">
                <h4 className="card-title">Building construction website</h4>
                <p className="card-text">
                  Business Website
                </p>
              </div>
              <h5>
                Read more<i className="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div className="flip-card-back d-flex flex-column justify-content-between p-4">
              <div>
                <h4>Technology used</h4>
                <ul>
                  <li>Ruby / Ruby on Rails</li>
                  <li>Html / Css / Javascript / Bootstrap</li>
                  <li>PostgreSQL</li>
                  <li>Heroku</li>
                  <li>AWS / S3 / Domain name / DNS Route53</li>
                  <li>Google APIs and services</li>
                </ul>
              </div>
              <div className="text-center">
                <a href="https://construction-web-site.herokuapp.com/" target="_blank" rel="noreferrer noopener"><i className="fas fa-external-link-alt fa-2x"></i></a>
                <a href="https://github.com/AudebertAdrien/construction-web-site" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Crimes Commited */}
        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img
                src={crimesInLeicester}
                className="card-img-top"
                alt="construction"
              />
              <div className="card-body">
                <h4 className="card-title">Crimes commited</h4>
                <p className="card-text">
                  Find all crimes commited in Leicester by GeoSearch
                </p>
              </div>
              <h5>
                Read more<i className="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div className="flip-card-back d-flex flex-column justify-content-between p-4">
              <div>
                <h4>Technology used</h4>
                <ul className="text-left">
                  <li>React</li>
                  <li>SWR is a React Hooks library for remote data fetching.</li>
                  <li>Leaflet is an open-source interactive maps</li>
                  <li>Axios</li>
                </ul>
              </div>
              <div className="text-center">
                <a href="https://crimes-in-leicester.netlify.app" target="_blank" rel="noreferrer noopener"><i className="fas fa-external-link-alt fa-2x"></i></a>
                <a href="https://github.com/AudebertAdrien/react-leaflet-GeoSearch" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* WEATHER */}
        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img src={weather} className="card-img-top" alt="weather" />
              <div className="card-body">
                <h4 className="card-title">Weather forecast</h4>
                <p className="card-text">
                  Find the local weather forecast now
                </p>
              </div>
              <h5>
                Read more<i className="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div className="flip-card-back d-flex flex-column justify-content-between p-4">
              <div>
                <h4>Technology used</h4>
                <ul className="text-left">
                  <li>React</li>
                  <li>Axios</li>
                </ul>
                <h4>Progressive Web App</h4>
                <ul className="text-left">
                  <li>
                    Work on a range of different device and operating systems with
                    a single codebase.
                  </li>
                  <li>Work offline</li>
                </ul>
                </div>
                <div className="text-center">
                  <a href="https://weather-forecast-and-review.netlify.app" target="_blank" rel="noreferrer noopener"><i className="fas fa-external-link-alt fa-2x"></i></a>
                  <a href="https://github.com/AudebertAdrien/pwa-weather-app" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default experiences;

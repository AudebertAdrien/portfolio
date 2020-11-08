import React from "react";
import "./experiences.css";
import imageTest from "../../images/construction.png";

function experiences() {
  return (
    <div className="mt-3 text-center ">
      <h3 className="p-5">WHAT I'VE DONE</h3>
      <div className="d-flex flex-wrap justify-content-around">
        
        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img src={imageTest} className="card-img-top" alt="imageTest" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <h5>
                Read more<i class="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img src={imageTest} className="card-img-top" alt="imageTest" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <h5>
                Read more<i class="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img src={imageTest} className="card-img-top" alt="imageTest" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <h5>
                Read more<i class="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img src={imageTest} className="card-img-top" alt="imageTest" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <h5>
                Read more<i class="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img src={imageTest} className="card-img-top" alt="imageTest" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <h5>
                Read more<i class="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card mb-5">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img src={imageTest} className="card-img-top" alt="imageTest" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <h5>
                Read more<i class="fas fa-angle-double-right"></i>
              </h5>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default experiences;

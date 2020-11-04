import React from "react";
import profilePicture from "../../images/profil_picture.jpg";
import "./about.css";

function about() {
  return (
    <div className="about-card card mt-3 border-0">
      <h3 className="text-center p-5">A LITTLE BIT ABOUT ME</h3>
      <div className="row no-gutters">
        <div className="col-md-4 order-2 m-auto">
          <img src={profilePicture} className="card-img" alt="Profil" />
        </div>
        <div className="col-md-8 order-1">
          <div className="card-body">
            <p className="card-text">
              On the lookout for new technological practices, I take advantage
              of any experiences to deepen my knowledge and technical skills in
              web development. I like to evolve in an ambitious, challenging and
              dynamic environment. Thanks to my past experience, I have
              developed a great capacity for adaptation, I appreciate teamwork
              with good understanding between colleagues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;

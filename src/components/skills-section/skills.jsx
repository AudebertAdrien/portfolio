import React from "react";
import "./skills.css";

function skills() {
  return (
    <div className="mt-3">
      <h3 className="text-center p-5">SKILLS</h3>
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group list-group-flush">
            <h3 className="text-center">LANGAGUE</h3>
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Ruby</li>
            <li className="list-group-item">Ruby on Rails</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-group list-group-flush">
            <h3 className="text-center">TOOLS</h3>
            <li className="list-group-item">Git &amp; Github</li>
            <li className="list-group-item">Command Line</li>
            <li className="list-group-item">Chrome DevTools &amp; Redux/React DevTools</li>
            <li className="list-group-item">Postman</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-group list-group-flush">
            <h3 className="text-center">FRAMEWORK &amp; LIBRARY</h3>
            <li className="list-group-item">Redux</li>
            <li className="list-group-item">Jest</li>
            <li className="list-group-item">Heroku</li>
            <li className="list-group-item">Amazon Web Services</li>
            <li className="list-group-item">PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default skills;

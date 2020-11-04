import React from "react";
import "./skills.css";

function skills() {
  return (
    <div className="mt-3">
      <h3 className="text-center p-5">SKILLS</h3>
      <div className="row">
        <div className="col-md-4">
          <ul class="list-group list-group-flush">
            <h3 className="text-center">LANGUAGES</h3>
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul class="list-group list-group-flush">
            <h3 className="text-center">FRAMEWORKS</h3>
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul class="list-group list-group-flush">
            <h3 className="text-center">TOOLS</h3>
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default skills;

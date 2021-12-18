import React from "react";
import { useParams } from "react-router-dom";
import "./sass/Registration_Form_Team.scss";

function Registration_Form_Team(props) {
  //   const { title } = props;

  return (
    <div className="eventRegistration__content-section2">
      <div className="eventRegistration__content-section2_inputs">
        <div className="input">
          <h4>name</h4>
          <input type="text" placeholder="Name" name="name" className="input" />
        </div>
        <div className="input">
          <h4>collage name</h4>
          <input
            type="text"
            placeholder="Collage Name"
            name="clgname"
            className="input"
          />
        </div>
      </div>
      <div className="eventRegistration__content-section2_inputs">
        <div className="input">
          <h4>email</h4>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="input"
          />
        </div>
        <div className="input">
          <h4>Phone Number</h4>
          <input
            type="text"
            placeholder="Phone Number"
            name="phnumber"
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default Registration_Form_Team;

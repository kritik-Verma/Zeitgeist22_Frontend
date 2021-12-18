import React from "react";
import "./sass/EventRegistration.scss";
import { Person } from "@material-ui/icons";
import Registration_Form_Team from "../components/Registration_Form_Team";
import { useParams } from "react-router-dom";

function EventRegistration() {
  const params = useParams();

  const sendData = (e) => {
    e.preventDefault();
    console.log(params);
    const Data = {
      otherMembers: [],
    };
    const arrTemp = [];
    for (let i = 0; i < e.target.length - 1; i++) {
      switch (i) {
        case 0:
          Data.mainUser = {
            username: e.target[0].value,
          };
          break;
        case 1:
          Data.mainUser.phoneN = e.target[1].value;
          break;
        default:
          Data.otherMembers.push(e.target[i].value);
      }
    }
    console.log(Data, " ", arrTemp);
  };

  return (
    <div className="eventRegistration">
      <div class="eventRegistration_wallpaper">
        <div className="eventRegistration__content">
          <div className="eventRegistration__content-heading">
            <h2>Registration Form</h2>
          </div>
          <form
            action=""
            onSubmit={(e) => {
              sendData(e);
            }}
          >
            <div className="eventRegistration__content-section1">
              <div className="eventRegistration__eventBox">
                <img
                  src="https://www.touchtaiwan.com/images/default.jpg"
                  alt=""
                />
                <h4>{params.EventDATA?.split(" ")[1]}</h4>
                <h4>
                  <Person /> single
                </h4>
              </div>
              <div className="eventRegistration__inputs">
                <div className="input">
                  <h4>name</h4>
                  <input type="text" placeholder="Name" className="input" />
                </div>
                <div className="input">
                  <h4>Phone Number</h4>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <Registration_Form_Team />
            <Registration_Form_Team />
            <Registration_Form_Team />
            <div className="eventRegistration__submitBtn">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>

        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
        <div className="bubble">
          <span class="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default EventRegistration;

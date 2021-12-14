import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import "./sass/EventCard.scss";
import { useHistory } from "react-router-dom";

function EventCard(props) {
  const { EventID, Image, Title, Data, ruleboock } = props;
  const EventId = useRef();
  const history = useHistory();
  function Register(e) {
    console.log(EventId.current.innerText);
    const pushURL = `/events/registration/${EventId.current.innerText}`;
    history.push(pushURL);
  }

  return (
    <div className="events__card">
      <div className="events__cardContent">
        <div className="events__cardContent-heading">
          <h2>{Title}</h2>
        </div>
        <div className="events__cardContent-imgContainer">
          <img className="events__cardContent-image" src={`${Image}`} alt="" />
        </div>

        <div className="events__cardContent-summery">{Data}</div>

        <div className="events__cardContent-btn">
          <Button
            onClick={(e) => Register(e)}
            style={{
              color: "white",
              border: "2px solid white",
              marginRight: "5px",
            }}
          >
            Register
          </Button>
          <Button
            style={{
              color: "white",
              border: "2px solid white ",
            }}
          >
            ruleboock
          </Button>

          <div
            ref={EventId}
            id="events__card__eventID"
            style={{ display: "none" }}
          >
            {`${EventID}%20${Title}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

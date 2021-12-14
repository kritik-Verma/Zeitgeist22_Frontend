import React, { useRef } from "react";
import EventCard from "../components/EventCard";
import "./sass/Events.scss";

function Events(props) {
  const { pageTitle } = props;

  return (
    <div className="events">
      <div className="events__heading">
        {/* <div className="waveHeading_container center ">
          <h2>{pageTitle}</h2>
          <h2>{pageTitle}</h2>
        </div> */}
      </div>
      <div className="events__content">
        <EventCard
          EventID={"1"}
          ruleboock={"#"}
          Title={"ABC"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          Title={"ABC"}
          EventID={"2"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          Title={"ABC"}
          EventID={"3"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          Title={"ABC"}
          EventID={"4"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          Title={"ABC"}
          EventID={"5"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          Title={"ABC"}
          EventID={"6"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
      </div>
    </div>
  );
}

export default Events;

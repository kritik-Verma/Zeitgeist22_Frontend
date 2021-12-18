import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import axios from "axios";
import "./sass/Events.scss";

const config = {
  headers: {
    CORS_ALLOW_ALL_ORIGINS: true,
  },
};

function Events(props) {
  const { pageTitle, url } = props;
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await axios.get(url);
        console.log(data.data.events);
        console.log(url);
        await setEvents(data.data.events);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="events">
      <div className="events__heading">
        {/* <div className="waveHeading_container center ">
          <h2>{pageTitle}</h2>
          <h2>{pageTitle}</h2>
        </div> */}
      </div>
      <div className="events__content">
        {events?.map((el) => {
          return (
            <EventCard
              key={el.event_id}
              EventID={el.event_id}
              ruleboock={el.rulebook}
              Title={el.name}
              // Image={"https://www.touchtaiwan.com/images/default.jpg"}
              Image={el.image}
              Data={el.description}
            />
          );
        })}
        <EventCard
          EventID={"1"}
          ruleboock={"#"}
          Title={"ABC"}
          Image={
            "https://zeitgeist.net.in/static/main_page/img/zenith%20poster%20images.png"
          }
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          EventID={"1"}
          ruleboock={"#"}
          Title={"ABC"}
          Image={
            "https://zeitgeist.net.in/static/main_page/img/VLSI%20Analog%20design%201.jpg"
          }
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          EventID={"1"}
          ruleboock={"#"}
          Title={"ABC"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
        <EventCard
          EventID={"1"}
          ruleboock={"#"}
          Title={"ABC"}
          Image={"https://www.touchtaiwan.com/images/default.jpg"}
          Data=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem vitae aliquam nemo porro corrupti inventore nisi!  Mollitia voluptatum expedita"
        />
      </div>
    </div>
  );
}

export default Events;

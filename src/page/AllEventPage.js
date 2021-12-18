import React from "react";
import { useHistory } from "react-router-dom";
import AllEventCard from "../components/AllEventCard";
import "./sass/AllEventPage.scss";

function AllEventPage() {
  const history = useHistory();
  return (
    <div className="allEventPage">
      <div
        className="allEventPage__card1"
        onClick={() => history.push("/events/tech")}
      >
        <AllEventCard
          title="technical event"
          poster="https://m.media-amazon.com/images/M/MV5BZGFiZTQ0MDctM2ViMS00MGEwLWIxNzgtYWUzZDM4N2NiMmQyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UX380_CR0,4,380,562_.jpg"
        />
      </div>
      <div
        className="allEventPage__card2"
        onClick={() => history.push("/events/cult")}
      >
        <AllEventCard
          title="cultural events"
          poster="https://i.pinimg.com/originals/ba/db/21/badb21c2cea1d1083e282ee4e4cec07a.jpg"
          theam="theam1"
        />
      </div>
    </div>
  );
}

export default AllEventPage;
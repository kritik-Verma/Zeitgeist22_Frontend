import React, { useEffect } from "react";
import "./sass/AllEventCard.scss";
import VanillaTilt from "../util/js/vanilla-tilt";

function AllEventCard(props) {
  const { title, poster, theam } = props;
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".cover"), {
      max: 25,
      speed: 400,
      glare: false,
      "max-glare": 1,
      gyroscope: true,
    });
    VanillaTilt.init(document.querySelectorAll(".cover"));
  }, []);

  return (
    <div className="allEventCard">
      <div className="cover">
        <div
          className={`allEventCard__box  ${
            theam === "theam1" ? "allEventCard__theam1" : "allEventCard__theam2"
          }`}
        >
          <div className="allEventCard__box_in">
            <div className="allEventCard__glass"></div>
            <div className="allEventCard__content">
              <h2>{title}</h2>
              <div className="allEventCard__content-img">
                <img
                  // src="https://m.media-amazon.com/images/M/MV5BZGFiZTQ0MDctM2ViMS00MGEwLWIxNzgtYWUzZDM4N2NiMmQyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UX380_CR0,4,380,562_.jpg"
                  src={poster}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEventCard;

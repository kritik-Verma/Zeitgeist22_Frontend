import React from "react";
import Nav from "../components/Nav";
import "./sass/Home.scss";

function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="home__tst">
        <img src="/images/chest.png" alt="" />
      </div>
    </div>
  );
}

export default Home;

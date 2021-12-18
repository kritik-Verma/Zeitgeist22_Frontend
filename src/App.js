import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { requests } from "./util/request";
import AllEventPage from "./page/AllEventPage";
import EventRegistration from "./page/EventRegistration";
import Events from "./page/Events";
// import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/events" exact>
            <AllEventPage />
          </Route>

          <Route path="/events/tech" exact>
            <Events
              pageTitle="Advitiya Events"
              url={requests.fetchTechEvents}
            />
          </Route>

          <Route path="/events/cult">
            <Events
              pageTitle="Advitiya Events"
              url={requests.fetchCultEvents}
            />
          </Route>

          <Route path="/events/registration/:EventDATA">
            <EventRegistration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

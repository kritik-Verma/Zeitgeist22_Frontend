import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import EventRegistration from "./page/EventRegistration";
import Events from "./page/Events";
// import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/events" exact>
            <Events pageTitle="Advitiya Events" />
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

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import TimelineIndex from "./Pages/TimelineIndex";
import EventsTimeline from "./Pages/EventsTimeline";
import Members from "./Pages/Members";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={EventsTimeline} />
        <Route exact path="/timeline" component={TimelineIndex} />
        <Route exact path="/members" component={Members} />
      </Switch>
    </Router>
  );
}

export default App;

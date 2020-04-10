import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Button from "./pages/Button";
import Typography from "./pages/Typography";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/button" render={() => <Button />} />
            <Route exact path="/typography" render={() => <Typography />} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;

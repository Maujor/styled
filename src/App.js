import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Styled-Components</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projeto1">Projeto1</Link>
            </li>
            <li>
              <Link to="/projeto2">Projeto2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/projeto1">
            <Projeto1 />
          </Route>
          <Route path="/projeto2">
            <Projeto2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Projeto1() {
  return <h2>Projeto1</h2>;
}

function Projeto2() {
  return <h2>Projeto2</h2>;
}

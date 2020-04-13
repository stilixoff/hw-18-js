import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Contacts from "./components/Сontacts/contacts"
import Home from "./components/Home/Home"
import Posts from "./components/Posts/Posts"
import Galery from "./components/Galery/Galery"

import "./App.css"
import "./reset.css"


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/galery">Galery</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/galery">
            <Galery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
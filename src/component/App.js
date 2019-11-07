import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import Edit from "./edit-recipes";
import Create from "./create-recipes";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">My Recipe App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">My Recipes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Recipes</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </div>
      </Router>
    );
  }
}

export default App;

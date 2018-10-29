import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Home from "./components/home";
import Skills from "./components/skills";
import Lang from "./components/lang";
import Jumborton from "./components/jumborton";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ToastContainer />
        <main className="container-flut">
          <Jumborton />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/langs" component={Lang} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

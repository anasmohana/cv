import React, { Component } from "react";
import About from "./about";
import Exper from "./exper";
import Education from "./education";
import Courses from "./cours";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <About />
        <Exper />
        <Education />
        <Courses />
      </React.Fragment>
    );
  }
}

export default Home;

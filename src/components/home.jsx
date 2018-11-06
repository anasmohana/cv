import React, { Component } from "react";
import About from "./about";
import Exper from "./exper";
import Education from "./education";
import Courses from "./cours";
import { toast } from "react-toastify";
import Jumborton from "./jumborton";
import BottomScrollListener from "react-bottom-scroll-listener";

class Home extends Component {
  state = {};
  showToast() {
    toast.error(
      "IKKE NOE FARLIG: Men jeg håper at dere bli interesse om min CV"
    );
  }
  render() {
    return (
      <React.Fragment>
        <BottomScrollListener onBottom={this.showToast} />
        <Jumborton />
        <About />
        <Exper />
        <Education />
        <Courses />
      </React.Fragment>
    );
  }
}

export default Home;

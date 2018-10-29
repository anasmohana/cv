import React, { Component } from "react";
import { Line } from "rc-progress";

class Progress extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      maxpercent: 0
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
  }
  componentWillMount() {
    const maxpercent = parseInt(this.props.percent);
    this.setState({ maxpercent });
  }

  increase() {
    const percent = this.state.percent + 1;
    const maxpercent = this.state.maxpercent;
    if (percent >= maxpercent + 1) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 10);
  }

  render() {
    return (
      <div style={{ margin: 10, width: 200 }}>
        <Line strokeWidth="4" percent={this.state.percent} />
        <span>{this.state.percent}%</span>
      </div>
    );
  }
}

export default Progress;

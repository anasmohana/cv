import React, { Component } from "react";
import { getSkilInfo } from "../services/skillsService";
import Progress from "./common/progress";
import Fade from "react-reveal/Fade";

class Skills extends Component {
  state = { data: [] };
  columns = [{ path: "title", lable: "" }, { path: "level", lable: "" }];
  async componentDidMount() {
    const { data } = await getSkilInfo();
    this.setState({ data });
  }

  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-sm-8">
            <h2>Skills</h2>
            <table>
              <thead>
                <tr>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(item => (
                  <tr key={item._id} className="partner">
                    <td>{item.title}</td>
                    <td className="progressrc">
                      <Fade>
                        <Progress percent={item.level} />
                      </Fade>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-sm-4" />
        </div>
      </div>
    );
  }
}

export default Skills;

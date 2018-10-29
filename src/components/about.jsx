import React, { Component } from "react";
import { getPerInfo } from "../services/perInfoService";
import _ from "lodash";

class About extends Component {
  state = {
    perinfo: []
  };
  columns = [
    { path: "name", lable: "Name" },
    { path: "bDate", lable: "Føds Dato" },
    { path: "address", lable: "Address" },
    { path: "email", lable: "Email" },
    { path: "mobile", lable: "Mobile" }
  ];
  async componentDidMount() {
    const { data: perinfo } = await getPerInfo();
    this.setState({ perinfo });
  }
  renderCell = (item, column) => {
    return _.get(item, column.path);
  };
  renderTh = column => {
    return column.lable;
  };
  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-sm-3">
            <i className="fa fa-info logo" aria-hidden="true" />
          </div>
          <div className="col-sm-9">
            <h2>Personalia</h2>

            {this.state.perinfo.map(item => (
              <ul key={item._id}>
                {this.columns.map(column => (
                  <li key={column.path}>
                    {this.renderTh(column)}
                    <span>: </span>
                    {this.renderCell(item, column)}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;

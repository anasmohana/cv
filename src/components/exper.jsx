import React, { Component } from "react";
import { getExpInfo } from "../services/experService";
import RenderTable from "./common/renderTable";
import Fade from "react-reveal/Fade";

class Exper extends Component {
  state = { data: [] };
  dateColumns = [
    { path: "fromDate", lable: "" },
    { path: "toDate", lable: "" }
  ];
  columns = [
    { path: "company", lable: "" },
    { path: "title", lable: "" },
    { path: "desc", lable: "" }
  ];
  async componentDidMount() {
    const { data } = await getExpInfo();
    this.setState({ data });
  }

  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-sm-8">
            <h2>Arbeidserfaring</h2>
            <RenderTable
              data={this.state.data}
              dateColumns={this.dateColumns}
              columns={this.columns}
            />
          </div>
          <div className="col-sm-4">
            <Fade top>
              <i
                className="fa fa-briefcase logo d-none d-sm-none d-md-noen d-lg-block"
                aria-hidden="true"
              />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Exper;

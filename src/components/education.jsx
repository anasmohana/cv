import React, { Component } from "react";
import { getEduInfo } from "../services/eduService";
import RenderTable from "./common/renderTable";
import Fade from "react-reveal/Fade";

class Education extends Component {
  state = { data: [] };
  dateColumns = [
    { path: "fromDate", lable: "" },
    { path: "toDate", lable: "" }
  ];
  columns = [
    { path: "university", lable: "" },
    { path: "title", lable: "" },
    { path: "desc", lable: "" }
  ];
  async componentDidMount() {
    const { data } = await getEduInfo();
    this.setState({ data });
  }
  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-sm-8">
            <h2>Utdanning</h2>
            <RenderTable
              data={this.state.data}
              dateColumns={this.dateColumns}
              columns={this.columns}
            />
          </div>
          <div className="col-sm-4">
            <Fade top big>
              <i className="fa fa-graduation-cap logo" aria-hidden="true" />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;

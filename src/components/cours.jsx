import React, { Component } from "react";
import { getCoursInfo } from "../services/coursService";
import RenderTable from "./common/renderTable";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";

class Courses extends Component {
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
    const { data } = await getCoursInfo();
    this.setState({ data });
  }
  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-sm-8">
            <h2>Kurs</h2>
            <RenderTable
              data={this.state.data}
              dateColumns={this.dateColumns}
              columns={this.columns}
            />
          </div>
          <div className="col-sm-4">
            <Fade top big>
              <i className="fa fa-leanpub logo" aria-hidden="true" />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;

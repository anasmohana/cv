import React, { Component } from "react";
import _ from "lodash";

class RenderTable extends Component {
  renderCell = (item, column) => {
    return _.get(item, column.path);
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(item => (
            <tr key={item._id} className="partner">
              {this.props.dateColumns.map(column => (
                <td key={column.path} className="top">
                  {this.renderCell(item, column)}
                </td>
              ))}
              {this.props.columns.map(column => (
                <td key={column.path} className="d-block myFont">
                  {this.renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RenderTable;

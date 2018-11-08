import React from "react";

const Info = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light">
        <h2>Why I created this project?</h2>
        <p>
          I created this project to communicate with you in another way. And to
          show you all my information and my skills in a real and concrete way.
          this project consists of three main parts:
        </p>
        <ul>
          <li>NodeJs as the backend model.</li>
          <li>ReactJs as the frontend model.</li>
          <li>MongoDB as the data model.</li>
        </ul>
        <p>
          All the data saved as documents in MongoDB and React fetch it by
          sending a request to Nodejs. and then it shows this data through
          different ways Lists, Table, and Graphic.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Info;

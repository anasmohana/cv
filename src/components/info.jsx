import React from "react";

const Info = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light">
        <h2>Hvem er jeg?</h2>
        <p>
          Jeg er 34 år og kommer opprinnelig fra Syria. Jeg har en bachelorgrad
          i elektronikk og kommunikasjon fra Damaskus Universitetet. Med min
          universitetsutdannelse og min varierte yrkesbakgrunn mener jeg å
          inneha de kvalifikasjonene som dere er på jakt etter. Det å planlegge
          og finne effektive løsninger har vært sentral oppgave i mine tidligere
          arbeidsforhold. Den vanskelige situasjonen i mitt hjemland har gitt
          meg mange utfordringer som IT- leder i bank, kringkastingsingeniør på
          radio og TV, og frontend - utvikler i mitt private firma. Dette har
          gitt meg mange ferdigheter på kort tid.
        </p>
      </div>
      <div className="container-fluid bg-white">
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

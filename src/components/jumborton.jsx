import React from "react";
import it from "./../img/it.jpg";
import frontend from "./../img/frontend.jpg";
import BroadCast from "./../img/BroadCast.jpg";

const Jumborton = () => {
  return (
    <div className="container-fluid d-none d-sm-none d-md-block">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" className="active" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src={BroadCast} alt="BroadCast" className="d-block w-100" />
            <div className="carousel-caption d-lg-none d-xl-block ">
              <h1>2006-2015</h1>
              <h3>BroadCast Ingeniør</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={it} alt="it" className="d-block w-100" />
            <div className="carousel-caption d-lg-none d-xl-block">
              <h1>2011-2014</h1>
              <h3>IKT Ingeniør</h3>
            </div>
          </div>
          <div className="carousel-item active ">
            <img src={frontend} alt="frontend" className="d-block w-100" />
            <div className="carousel-caption d-lg-none d-xl-block">
              <h1>2014-2018</h1>
              <h3>Frontend Utvikler</h3>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-chevron-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Jumborton;

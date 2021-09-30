import React from "react";
import { useHistory } from "react-router";
import Contact from "../../Contact_Us/Contact";
import img5 from "../../img/photo(2).jpg";
import img3 from "../../img/photo(3).jpg";
import img1 from "../../img/photo(5).jpg";

const Carousel = () => {
  const history = useHistory();
  const handleViewMeals = () => {
    history.push(`/header`);
  };
  return (
    <div>
      <h1>
        <span className="text-success">Best Food</span> provided <br /> by the
        Best team in the world.
      </h1>
      <div className="header-design row bg-light shadow mt-5 vh-100">
        <div
          id="carouselExampleControls"
          className="carousel slide container col-7 vh-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner vh-100">
            <div className="carousel-item active">
              <img src={img1} className="img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img5} className="img-flulid w-100 vh-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="img-fluid" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-5 text-center my-auto">
          <h3 className="">This is our Best fod pics </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            fugiat eaque dignissimos quos dolore vel laborum odio cum, soluta
            suscipit!
          </p>
          <button onClick={handleViewMeals} className="btn btn-danger">
            View Meals{" "}
          </button>
        </div>
      </div>
      <div className="my-5" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Carousel;

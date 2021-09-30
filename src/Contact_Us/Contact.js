import React from "react";
import "./Contact.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row gx-5 py-5 px-3">
        <div className="col-lg-3 col-sm-6  border-lg-end ">
          <h1 className="my-color fatface">MealDb</h1>
          <p className="text-white text-start">
            Scroll Our page to find the best fish recipies in the world . You
            can easily try our product or you can make it youself by watching
            the description.
          </p>
        </div>
        <div className="col-lg-3 col-sm-6 text-white border-lg-end text-decoration-none about-us text-start ps-4 pe-0 me-0">
          <h3 className="mb-3">About Us </h3>
          <p>
            <a href="/Careers">Careers</a>
          </p>
          <p>
            <a href="/Our Stores"> Our Stores</a>
          </p>
          <p>
            <a href="Cares">Our Cares </a>
          </p>
          <p>
            <a href="Terms">Terms And Condition </a>
          </p>
          <p>
            <a href="Policy">Privacy Policy </a>
          </p>
        </div>
        <div className="col-lg-3 col-sm-6 text-white border-lg-end text-decoration-none customer-care text-start">
          <h3>Customer Care </h3>
          <p>
            <a href="/help">Help Center </a>
          </p>
          <p>
            <a href="/howtobuy"> How to buy</a>
          </p>
          <p>
            <a href="/trackorder">Track your order </a>
          </p>
          <p>
            <a href="/cooperate">Co-operate and Bulk Purchasing </a>
          </p>
          <p>
            <a href="/return">Returns and Refunds </a>
          </p>
        </div>
        <div className="col-lg-3 col-sm-6 text-white text-decoration-none connect-with-us">
          <h3 className="pb-3">Connect With Us</h3>
          <p>
            70 Washington Square South, New York, NY 10012, United States <br />
            Email: uilib.help@gmail.com
            <br />
            Phone: +1 1123 456 780
          </p>
          <h3 className="p-2 link-container">
            <i class="fab fa-facebook text-info p-2"></i>
            <i class="fab fa-instagram-square text-danger p-2"></i>
            <i class="fab fa-twitter-square text-info p-2"></i>
            <i class="fab fa-google-plus-square text-warning p-2"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;

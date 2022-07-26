import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const MainFrame = () => {
  return (
    <div className="col">
      <div className="container">
        <div className="row d-lg-flex flex-lg-row d-flex flex-column-reverse bg-light mt-2 d-flex align-items-center justify-content-center width_height ">
          <div className="col">
            <div className="p-5" id={2}>
              <p className="fs-6 p-green">BEST QUALITY</p>
              <p className=" mainframe_heading fw-bold">
                We’re in Business to Improve Lives
              </p>
              <p className=" mainframe_heading fw-bold">100% Original</p>
              <p className="text-muted mb-4">Free Delivery Available</p>
              <Link to="/products" className="btn btn-success px-4">
                SHOP NOW
              </Link>
            </div>
          </div>
          <div className="col">
            <div id={1}>
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item" data-bs-interval={2000}>
                    <img
                      src="https://images.unsplash.com/photo-1598327106026-d9521da673d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
                      className="d-block w-100"
                      width={"200px"}
                      height={"580px"}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                      className="d-block w-100"
                      alt="..."
                      width={"200px"}
                      height={"580px"}
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="https://m.media-amazon.com/images/I/71f1Tva5lHS._SX679_.jpg"
                      className="d-block w-100"
                      alt="..."
                      width={"200px"}
                      height={"580px"}
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80"
                      className="d-block w-100"
                      alt="..."
                      width={"200px"}
                      height={"580px"}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;

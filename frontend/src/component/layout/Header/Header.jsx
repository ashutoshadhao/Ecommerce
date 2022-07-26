import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid pe-lg-2 p-0">
          <Link className="navbar-brand fw-bold fs-3 ms-4" to="/">
            E-Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link pe-3 me-4 fw-bold "
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pe-3 me-4 fw-bold" to="/products">
                  PRODUCT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pe-3 me-4 fw-bold" to="/login">
                  ACCOUNT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pe-3 me-4 fw-bold" to="/cart">
                  CART
                  <span className="badge badge-warning" id="lblCartCount">
                    {cartItems.length}
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pe-3 me-4 fw-bold" to="/contact">
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pe-3 me-4 fw-bold" to="/about">
                  ABOUT
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav icons ms-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

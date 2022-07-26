import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container-fluid p-0 font_size mt-4">
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          {/* Section: Social media */}
          <section
            className="d-flex justify-content-between p-2"
            style={{ backgroundColor: "#6351ce" }}
          >
            {/* Left */}
            <div className=" m-3 d-flex align-items-center justify-content-center">
              <h5>Get connected with us on social networks :</h5>
            </div>
            {/* Left */}
            {/* Right */}
            <ul className="wrapper ">
              <li className="icon facebook">
                <span className="tooltip">Facebook</span>
                <span>
                  <a
                    href="https://www.facebook.com/profile.php?id=100008124525342"
                    className=" fab fa-brands font_color fa-facebook-f"
                  >
                    {" "}
                  </a>
                </span>
              </li>
              <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <span>
                  <a
                    href="https://twitter.com/i/flow/login"
                    className="fab  font_color fa-twitter"
                  >
                    {" "}
                  </a>
                </span>
              </li>
              <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span>
                  <a
                    href="https://www.instagram.com/ashutoshadhao/"
                    className="fab font_color fa-instagram"
                  >
                    {" "}
                  </a>
                </span>
              </li>
              <li className="icon github">
                <span className="tooltip">Github</span>
                <span>
                  <a
                    href="https://github.com/ashutoshadhao?tab=repositories"
                    className="fab font_color fa-github"
                  >
                    {" "}
                  </a>
                </span>
              </li>
              <li className="icon youtube">
                <span className="tooltip">Youtube</span>
                <span>
                  <a
                    href="https://www.youtube.com/"
                    className="fab font_color fa-youtube"
                  >
                    {" "}
                  </a>
                </span>
              </li>
            </ul>

            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">E-Store</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    E-Store is a Best Websites for buying electric Products. we
                    highly appreciate to atlist give us chance to deliver
                    happyness to your doorstep.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}

                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <NavLink to="/account" className="text-white">
                      Your Account
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/cart" className="text-white">
                      Cart
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/products" className="text-white">
                      Products
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/contact" className="text-white">
                      Help
                    </NavLink>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <NavLink to="#" className="fas footer_home fa-home " />{" "}
                    Amravati, Maharashtra
                  </p>
                  <p>
                    <NavLink to="#" className="fas footer_home fa-envelope" />
                    ecommerce7024@gmail.com
                  </p>
                  <p>
                    <NavLink to="#" className="fas fa-phone footer_home" /> + 91
                    7024348951
                  </p>
                  <p>
                    <NavLink to="#" className="fas fa-print footer_home " /> +
                    01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <NavLink className="text-white m-2" to="/">
              E-Store.com
            </NavLink>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      {/* End of .container */}
    </>
  );
};

export default Footer;

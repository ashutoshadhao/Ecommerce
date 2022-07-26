import React from "react";
import AboutImage from "../../../images/AboutImage.jpg";
const About = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="container">
              <div className="row">
                <div
                  className="col  align-items-center justify-content-center flex-column"
                  style={{
                    textAlign: "center",
                    margin: "0px",
                  }}
                >
                  <h1> About Us </h1>
                  <div
                    style={{
                      margin: "29px",
                      border: "2px solid black",
                      padding: " 50px 38px ",
                    }}
                  >
                    <p>
                      <p
                        style={{
                          fontSize: "40px",
                          fontWeight: "600",
                        }}
                      >
                        Hello Guys ,
                      </p>
                      <br />
                      <p>
                        My name is Ashutosh Adhao. I am currently in final year
                        of Engineering.
                      </p>
                      <br />
                      <p
                        style={{
                          color: "red",
                          marginTop: "50px",
                          fontWeight: "600",
                        }}
                      >
                        NOTE -- This is a DUMMY Eccomerce Website this website
                        NOT SOLD ANY THING
                      </p>
                    </p>
                  </div>
                </div>
                <div className="col">
                  <img
                    src={AboutImage}
                    alt="AboutImage"
                    width={"500px"}
                    height={"500px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

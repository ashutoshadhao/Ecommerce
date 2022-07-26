import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const history = useNavigate();
  return (
    <>
      <div className="container-fluid  ">
        <div className="row ">
          <div className="col-10 mx-auto shadow border border-dark">
            <h1 className="text-center m-3">Contact Us </h1>
            <hr className="mb-4" />
            <div class="container m-5">
              <div class="row">
                <div class="col">
                  <div className="row g-3">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Last name"
                      />
                    </div>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                      ></textarea>
                      <label for="floatingTextarea2">Comments</label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn mt-3 col-4 border border-dark shadow"
                        onClick={() => {
                          alert("Detailed Submitted");
                          history("/");
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col contact_image ">
                  <img
                    src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?w=900&t=st=1656855592~exp=1656856192~hmac=7aac4173fbd7c17ed344211a4a4007df0e93b32c662ef45c3776f26e1962fdfb "
                    width={"400px"}
                    height={"300px"}
                    alt=""
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

export default Contact;

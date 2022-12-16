import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./ProductDetails.css";
import Rating from "@mui/material/Rating";
// import { useParams } from "react-router-dom";
const ReviewCard = ({ review }) => {
  const options = {
    // size: "large",
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      <div class=" ">
        <div
          className="card box_size_review"
          style={{ textAlign: "center", margin: "20px" }}
        >
          <div>
            <AccountCircleIcon className="user card-img-top" />
          </div>

          <div className="card-body">
            <h5 className="card-title">{review.name}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "6px",
              }}
            >
              <Rating {...options} />
            </div>

            <p className="card-text">{review.comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;

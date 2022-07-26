import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
import Rating from "@mui/material/Rating";
import { addItemsToCart } from "../../actions/cartAction.js";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const options = {
    // size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(product._id, 1));
    alert.success("Item Added To Cart");
  };
  const buyHandler = () => {
    dispatch(addItemsToCart(product._id, 1));
  };
  return (
    <>
      <div className="card m-3" style={{ width: "19rem", height: "450px" }}>
        <NavLink
          to={`/product/${product._id}`}
          className="d-flex justify-content-around"
        >
          <img
            src={product.images[0].url}
            alt={product.name}
            width={"301px"}
            height={"240px"}
          />
        </NavLink>

        <div className="card-body">
          <NavLink to={`/product/${product._id}`} className={"card_title"}>
            <h5 className="card-title text-center m-2 ">{product.name}</h5>
          </NavLink>

          <div className=" d-flex align-items-center justify-content-center  ">
            <div className=" fs-4  main_price">₹ {product.price}</div>
          </div>
          <div className=" d-flex align-items-center justify-content-center m-2">
            <Rating {...options}></Rating>
            <div className="m-1">({product.numOfReviews} Reviews) </div>
          </div>
          <div className="text-center d-flex justify-content-evenly ">
            <NavLink
              to="/cart"
              className="btn btn-success buy_btn  "
              onClick={buyHandler}
            >
              BUY NOW
            </NavLink>
            <NavLink
              to="#"
              className="btn btn-primary "
              onClick={addToCartHandler}
            >
              ADD CART
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

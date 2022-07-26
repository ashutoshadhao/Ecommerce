import React, { Fragment, useEffect, useState } from "react";
import "./ProductDetails.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";
import ReviewCard from "./ReviewCard.jsx";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction.js";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useParams } from "react-router-dom";
import LoadingBar from "../layout/Loader/LoadingBar";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
const ProductDetails = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(params.id, quantity));
    alert.success("Item Added To Cart");
  };
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };
  const buyHandler = () => {
    dispatch(addItemsToCart(params.id, quantity));
    history("/cart");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, error, alert, reviewError, success]);
  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="container">
          <MetaData title={`${product.name} -- E-STORE`} />
          <div className="row">
            <div className="col" style={{ height: "500px" }}>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                      width="500px"
                      height="470px"
                    />
                  ))}
              </Carousel>
            </div>
            <div className="col">
              <div className="container ">
                <h2 className="mt-3 mb-3">{product.name}</h2>
                <div className="d-flex ">
                  <h3 className="main_price">₹ {product.price}</h3>
                  <h4 className="cut_price">
                    ₹ {product.price + 0.8 * product.price}
                  </h4>
                </div>
                <div className="mt-4 description_width">
                  <h4>Description</h4>
                  <p>{product.description}</p>
                </div>
                <div className="mt-4 mb-4">
                  <h5>
                    Status :
                    <b
                      className={product.Stock < 1 ? "redColor" : "greenColor"}
                    >
                      {product.Stock < 1 ? "Out Of Stock" : " InStock"}
                    </b>
                  </h5>
                </div>

                <div className="mb-3">
                  <Button onClick={decreaseQuantity}>
                    <RemoveIcon />
                  </Button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="input_quantity"
                  />
                  <Button onClick={increaseQuantity}>
                    <AddIcon />
                  </Button>
                </div>
                <div className="m-3 d-flex align-items-center justify-content-left ">
                  <Rating {...options} />
                  <h5 className="m-1">( {product.numOfReviews} Reviews )</h5>
                </div>
                <div className="d-flex mt-3">
                  <Button
                    size="medium"
                    className="button_addToCart "
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    size="medium"
                    className="button_buyNow"
                    disabled={product.Stock < 1 ? true : false}
                    onClick={buyHandler}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <h1 className="text-center m-4">Reviews</h1>
          <div className="container  ">
            {product.reviews && product.reviews[0] ? (
              <div class=" d-flex flex-nowrap scroll ">
                {product.reviews &&
                  product.reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
              </div>
            ) : (
              <h4 className="noReviews ">No Reviews Yet 😐</h4>
            )}
          </div>
          <div className="text-center ">
            <Button
              size="large"
              variant="contained"
              onClick={submitReviewToggle}
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
              }}
              className=""
            >
              Add Review
            </Button>
            <Dialog
              aria-labelledby="simple-dialog-title"
              open={open}
              onClose={submitReviewToggle}
            >
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submitDialog">
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size="large"
                />

                <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </DialogContent>
              <DialogActions>
                <Button onClick={submitReviewToggle} color="secondary">
                  Cancel
                </Button>
                <Button onClick={reviewSubmitHandler} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

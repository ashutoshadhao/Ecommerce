import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../Home/ProductCard";
import { NavLink } from "react-router-dom";
import SideBar from "../Home/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import LoadingBar from "../layout/Loader/LoadingBar";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import "./Products.css";
import Pagination from "react-js-pagination";
import MetaData from "../layout/MetaData";
import Slider from "@mui/material/Slider";

const categories = [
  "Laptop",
  "Mobile",
  "Headphone",
  "Ipads",
  "Smart Watches",
  "Cameras",
  "Trimmers",
  "TVs",
  "Home Theaters",
  "PSPs",
];
const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 125000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);
  const params = useParams();
  const keyword = params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);
  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <>
          <MetaData title="PRODUCTS -- E-STORE" />
          <div className="container-fluid ">
            <div className="row min_height_container_product">
              <SideBar />
              <div className="col product_container">
                <div>
                  <h1 className="text-center m-3">Products</h1>
                  <hr />
                  <div className="d-flex justify-content-evenly flex-wrap container ">
                    {products &&
                      products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                  </div>
                </div>
                {resultPerPage < productsCount && (
                  <div className="text-center d-flex justify-content-center m-3">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className=" mt-3 mb-3 filter_box">
              <div>
                <h5>Price</h5>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={125000}
                />
              </div>
            </div>
            <div className="categories_sidemenu">
              <p>
                <NavLink
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-between m-2 bg-dark p-3"
                  data-bs-toggle="collapse"
                  to="#collapseExample"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <span className="fas fa-bars">
                    <span className="ps-3 ">All Categories</span>
                  </span>
                  <span className="fas fa-chevron-down" />
                </NavLink>
              </p>
              <div
                className="collapse show border ms-3 mt-3 mb-3"
                id="collapseExample"
              >
                <ul className="list-unstyled">
                  {categories.map((category) => (
                    <li
                      className="dropdown-item m-3 category_link"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rating_box">
              <h5>Rating Above</h5>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;

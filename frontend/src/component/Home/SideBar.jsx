import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [keyword, setKeyword] = useState("");

  const history = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      console.log(keyword);
      history(`/products/${keyword}`);
    } else {
      history("/products");
    }
  };
  return (
    <div className="col-lg-3 mb-lg-0 mb-2 mt-2">
      <form
        className="d-flex align-items-center ms-2 margin_top_search mb-3  ps-lg-0 ps-sm-3 "
        onSubmit={searchSubmitHandler}
      >
        <input
          style={{
            paddingRight: "15px",
            paddingLeft: "0px",
            padding: "9px 6px",
            textAlign: "center",
            marginRight: "6px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
          type="text"
          placeholder="Seach your Product ?"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="submit"
          value="SEARCH"
          className="btn btn-primary d-flex align-items-center justify-content-center"
          style={{ borderRadius: "10px" }}
        />
      </form>

      <div className="ms-3 mt-3 mb-3  filter_height "></div>
      <div className="ms-3 mt-3 mb-3 filter_height"></div>
    </div>
  );
};

export default SideBar;

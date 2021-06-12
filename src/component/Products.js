import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getvalue, removeselectProducrs } from "../redux/Action";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Products({ addToCart1 }) {
  const state = useSelector((state) => state.reducer.valu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getvalue());
    // dispatch(removeselectProducrs());
  }, []);

  return (
    <div>
      <h2 className="text-success">Products</h2>

      <div className="row">
        {!state.isloading ? (
          <h1 className="text-danger">
            {" "}
            Loading....<span className="text-danger spinner-border"></span>
          </h1>
        ) : (
          state.data.map((item) => (
            <div class="card heightwidth shadow-lg  ">
              {/* <Link to={`/product/${item.id}`} /> */}
              <Link to={`/products/${item.id}`}>
                <img
                  class="card-img-top imgheightwidth  "
                  src={item.image}
                  alt="Card image cap"
                />
                <span class="tooltiptext">Tooltip text</span>
                <h5 class="text heading">{item.title}</h5>
                <h6 className="text-danger">$ {item.price}</h6>
                <button
                  onClick={() => addToCart1(item)}
                  class="btn btn-outline-dark small"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingledetails, removeselectProducrs } from "../redux/Action";

export default function DetailsProduct() {
  const dispatch = useDispatch();
  const detailsProducts = useSelector((state) => state.reducer.productsDetails);
  const functiom = useSelector((state) => state.reducer.function);
  console.log(`functiom`, functiom);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getsingledetails(id));
  }, [id]);
  return (
    <div className="bg-dark">
      {" "}
      <div class="card mb-3 w-50 mt-5 ml-5 p-5 shadow-lg">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={detailsProducts.image} alt="..." className="w-100" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-capitalize  font-weight-bold">
                {detailsProducts.title}
              </h5>
              <p class="card-text">Id:{detailsProducts.id}</p>

              <p class="card-text font-weight-normal font-italic">
                Details:
                {detailsProducts.description}
              </p>
              <p class="card-text text-danger">${detailsProducts.price}</p>
              <p class="card-text">Category:{detailsProducts.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

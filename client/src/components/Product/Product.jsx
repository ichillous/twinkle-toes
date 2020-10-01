import React from "react";
import "./Product.css";
import StarRating from "../StarRating/StarRating";
import { Link } from "react-router-dom";

const Product = (props) => {

  return (
    <>
      <Link className="product" to={`/products/${props._id}`}>
        <div className="product-image-container">
          <img className="product-image" src={props.imgURL} alt={props.name} />
        </div>
        <StarRating rating={props.rating} />
        <div className="product-name">{props.name}</div>
        <div className="product-price">{`${props.price}`}</div>
      </Link>
    </>
  );
};

export default Product;

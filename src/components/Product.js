import React from "react";
// import { useAuth } from "../context/GlobalState";
import starIcon from "../images/icons/star.png";
import "../components/Product.css";
import { useAuth } from "../Contextt/GloballState";
import { useNavigate } from "react-router-dom";

const Product = ({ title, price, image, rating, id }) => {
  const { dispatch, user } = useAuth();
  const Navigate = useNavigate();
  const addToBasket = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      return Navigate("/Login");
    }
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} alt="" />
            </p>
          ))}
      </div>
      <img src={image} alt="product-img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;

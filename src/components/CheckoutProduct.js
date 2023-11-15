import React from "react";
import starIcon from "../images/icons/star.png";
import "./CheckoutProduct.css";
import { useAuth } from "../Contextt/GloballState";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const {dispatch} = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" alt="" src={image} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={starIcon} alt="" />
              </p>
            ))}
        </div>
        {<button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  );
};

export default CheckoutProduct;

import React from "react";
import { useAuth } from "../Contextt/GloballState.jsx";
import checkoutImg from "../images/checkoutAd.jpg";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const { basket,user } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" alt="" src={checkoutImg} />
        <div>
          <h3>
            Hello,
            {user?.email}
          </h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
         {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )} 
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import Subtotal from "../Subtotal";
import "./Checkout.css";

function index() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
        {/* BasketItem */}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default index;

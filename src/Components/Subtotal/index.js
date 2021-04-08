import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
function index() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong> 0 </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" className="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={12}
        displayType="text"
        prefix="£"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default index;

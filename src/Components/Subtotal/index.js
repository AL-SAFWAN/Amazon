import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router";
import { getBasketTotal } from "../../Store/selector";
import { useStateValue } from "../../Store/StateProvider";
import "./Subtotal.css";
function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}):
              <strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" className="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        prefix="£"
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

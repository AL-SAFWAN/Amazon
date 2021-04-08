import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useStateValue } from "./Store/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IdwcLLpKmqgCHxfCuBrhNaQGcEFkpWi5IFowhgDu1msq6ReijSzGH9gxCfWrQlJ63ujlUGqp5Xve0EIiLHEWC5n00o8i4Qiif"
);

function App() {
  const [user] = useAuthState(auth);
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      dispatch({
        type: "SET_USER",
        payload: user,
      });
    } else {
      dispatch({
        type: "SET_USER",
        payload: null,
      });
    }
  }, [user]);
  console.log(state);
  return (
    //BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

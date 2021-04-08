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
            <Payment />
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

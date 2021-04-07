import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    //BEM
    <Router>
      <Switch>
        <Route path="/">
          <div className="app">
            <Header />
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

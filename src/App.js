import Home from "./component/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailsProduct from "./component/DetailsProduct";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:id">
          <DetailsProduct />
        </Route>
      </Switch>{" "}
    </Router>
  );
}

export default App;

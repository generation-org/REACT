import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import { Provider } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
import Home from "./Home";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={DefaultLayout} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

const DefaultLayout = () => (
  <div className="container">
    <Navigationbar />
    <Route path="/" exact component={Home} />
  </div>
);

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

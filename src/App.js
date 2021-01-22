import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar1 from "./components/Navbar";
import ProductList from "./components/ProductList";
import HospitalList from "./components/HospitalList";
import Default from "./components/Default";

import Modal from "./components/Modal";
import Login from "./components/Login";
import User from "./components/User";
import Booking from "./components/Booking";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/appointments" component={ProductList} />
          <Route path="/hospitallist" component={HospitalList} />
          <Route path="/booking" component={Booking} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

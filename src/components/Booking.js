import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../App.css";


export default class Booking extends Component {
  state={
    date:new Date(),
  }
onChange=date=> this.setState({date})
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
    <React.Fragment >
   <Calendar className="calendar" onChange={this.onChange} value={this.state.date} minDate={new Date} hover/>
    </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

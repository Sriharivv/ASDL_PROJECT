import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import {faAngleDoubleRight,faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Logout from "./Logout";


export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
          <ProductConsumer>
            {value => {
              const {bool}=value;
              return (
            <React.Fragment>

            <div className="cards-slider-wrapper2"  >
                  {value.products.map(product=>(
                  <div>
                  {bool?
                  <React.Fragment>
                   <Link to="/login">

                        <img src={product.img} onClick={() => value.handleDetail(product.id)}/>

                    </Link>
                    </React.Fragment>
                    :
                    <React.Fragment>

                     <Link to="/details">
                       <div>
                        <img src={product.img} onClick={() => value.handleDetail(product.id)}/>
                       </div>
                      </Link>
                      <div  className="title">
                       {product.title}
                       </div>
                       <div  className="price ">
                        ${product.price}
                        </div>
                    </React.Fragment>
                    }
                  </div>))}
            </div>

           <Logout/>
            </React.Fragment>
            );
            }}
          </ProductConsumer>
    );
  }
}

import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import Navbar1 from "./Navbar";
import {Typography,Container} from  '@material-ui/core';
import {faMapMarkerAlt,faRupeeSign} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default class ProductList extends Component {
  render() {

    return (
      <ProductConsumer>

        {value => {
          return (

          <React.Fragment>
            <Navbar1/>
        <div style={{ background: "lightgrey",height:'100%'}}>

                    {value.products.map(product=> (


                          <div  className="card container" onClick={()=>value.handleDetail(product.id)}>
                            <div className="docdetails">
                              {product.title}
                            </div>

                            <div className="icon1">
                              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/>
                              <div style={{fontweight:"bold",position:"relative",top:"-1.8em",right:"-2em"}}>
                               Kochi
                              </div>
                            </div >

                            <div className="icon2">
                              <FontAwesomeIcon icon={faRupeeSign} size="2x"/>
                              <div style={{fontweight:"bold",position:"relative",top:"-1.8em",right:"-2em"}}>
                              {product.price}
                              </div>
                            </div >


                            <div className="info">
                               {product.info}
                            </div>
                            <div className="docname">
                               {product.company}
                            </div>

                            <img src={product.img} />
                          </div>

                      )
                    )
                    }


             </div>
             </React.Fragment>
      );
    }}


      </ProductConsumer>
    );
  }
}

const ProductWrapper = styled.section``;

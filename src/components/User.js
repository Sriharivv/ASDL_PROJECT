import React, { Component } from "react";
import Product from "./Product";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import Navbar2 from "./Navbar0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {borders} from '@material-ui/system';
import Appoinments from "./Appoinments";
import Billingrec from "./BillingRec";
import Medrec from "./MedRec";
import Profset from "./Profset";
import Prescription from "./Prescription";




export default class User extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {current}=value;
          const {appoinbg,presbg,billbg,medrepbg,profsetbg}=value;
          return (
          <React.Fragment style={{overflow:"hidden"}} >
            <Navbar2/>
            <List   className="dashboard" >
             <ListItem  divider="true" className="dashf" >
                  <img src="img/product-7.jpg"  className="dashpic" />
                  <ListItemText className="usernamepos" > Henry Neville </ListItemText>
             </ListItem>
             <ListItem button divider="true"  className="dasho" style={{backgroundColor:appoinbg}} onClick={()=>{value.handleAppointments(); }} >
            <ListItemText className="dashw"> Appoinments </ListItemText>
           </ListItem>
          <ListItem button divider="true" className="dasho" style={{backgroundColor:presbg}} onClick={()=>{value.handlePrescription(); }}>
          <ListItemText> Prescription </ListItemText>
          </ListItem>
          <ListItem button divider="true" className="dasho"  style={{backgroundColor:billbg}} onClick={()=>{value.handleBilling();}}>
          <ListItemText> Billing</ListItemText>
          </ListItem>
          <ListItem button divider="true" className="dasho"  style={{backgroundColor:medrepbg}} onClick={()=>{value.handleMedRec();}}>
          <ListItemText> Medical Records </ListItemText>
          </ListItem>
          <ListItem button divider="true" className="dasho"  style={{backgroundColor:profsetbg}} onClick={()=>{value.handleProfset();}}>
          <ListItemText>Profile Settings  </ListItemText>
          </ListItem>
           </List>
      <div className="pos" >
      {current === "Appoinment" && <Appoinments/>}
      {current === "Prescription" && <Prescription/>}
      {current === "ProfSet" && <Profset/>}
      {current === "Medrec" && <Medrec/>}
      {current === "Billing" && <Billingrec/>}
      </div>
          </React.Fragment>
      );
    }}
      </ProductConsumer>
    );
  }
}

const ProductWrapper = styled.section``;

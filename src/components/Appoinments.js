import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {borders} from '@material-ui/system';
import {detailProduct,storeProducts} from "../data";
import { ProductConsumer } from "../context";
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listItemText:{
    fontSize:'1.35em',//Insert your required size
  },
});

export default function Appoinments(props)  {
const classes = useStyles(props);
return (
    <React.Fragment>
    <List   className="appoid" >

   <ListItem divider="true"  className="hgt">
     <ListItemText  classes={{primary:classes.listItemText}}><b> Doctor</b></ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b> Appt Date </b> </ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b>Booking Date</b></ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b> Amount  </b></ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b> Status </b></ListItemText>
   </ListItem>
 <ListItem  divider="true" className="dashh">
  <ListItemText>Dr Ruby Swinn</ListItemText>
  <ListItemText className="aptdate"> 20 Nov 2020</ListItemText>
  <ListItemText className="bookdate"> 15 Nov 2020</ListItemText>
  <ListItemText className="amt">Rs160 </ListItemText>
  <ListItemText className="status">Confirm</ListItemText>
 </ListItem>

 <ListItem  divider="true" className="dashh">
  <ListItemText>Dr Linda Marks</ListItemText>
  <ListItemText className="aptdate"> 2 Nov 2020</ListItemText>
  <ListItemText className="bookdate"> 20 Oct 2020</ListItemText>
  <ListItemText className="amt">Rs260 </ListItemText>
  <ListItemText className="status"> Confirm</ListItemText>
 </ListItem>

 <ListItem  divider="true" className="dashh">
  <ListItemText>Dr Linda Marks</ListItemText>
  <ListItemText className="aptdate">12  Oct 2020</ListItemText>
  <ListItemText className="bookdate"> 8 Oct 2020</ListItemText>
  <ListItemText className="amt">Rs260 </ListItemText>
  <ListItemText className="status"> Confirm</ListItemText>
 </ListItem>


 <ListItem  divider="true" className="dashh">
  <ListItemText>Dr Harry Tim</ListItemText>
  <ListItemText className="aptdate"> 5 Oct 2020</ListItemText>
  <ListItemText className="bookdate"> 2 Oct 2020</ListItemText>
  <ListItemText className="amt">Rs200 </ListItemText>
  <ListItemText className="status"> Confirm</ListItemText>
 </ListItem>

 <ListItem  divider="true" className="dashh">
  <ListItemText>Dr Mark Noble</ListItemText>
  <ListItemText className="aptdate"> 23 Jan 2020</ListItemText>
  <ListItemText className="bookdate"> 17 Jan 2020</ListItemText>
  <ListItemText className="amt">Rs200 </ListItemText>
  <ListItemText className="status"> Confirm</ListItemText>
 </ListItem>




   </List>
    </React.Fragment>
              );

          }

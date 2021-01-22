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

export default function Medrec(props)  {
const classes = useStyles(props);
return (
    <React.Fragment>
    <List   className="appoid" >

   <ListItem divider="true"  className="hgt">
     <ListItemText  classes={{primary:classes.listItemText}}><b> ID</b></ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b> Date </b> </ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b>Description </b></ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b>Attachment
     </b></ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b> Created </b></ListItemText>
   </ListItem>
 <ListItem  divider="true" className="dashh">
  <ListItemText>#108</ListItemText>
  <ListItemText > 20 Nov 2020</ListItemText>
  <ListItemText >Dental Filling </ListItemText>
  <ListItemText >DentalFill.pdf</ListItemText>
  <ListItemText >Dr Linda Perrin</ListItemText>
 </ListItem>

 <ListItem  divider="true" className="dashh">
  <ListItemText>#109</ListItemText>
  <ListItemText > 12 Nov 2020</ListItemText>
  <ListItemText>Teeth Cleaning</ListItemText>
  <ListItemText>Teethcleaning.pdf</ListItemText>
  <ListItemText>Dr Linda Perrin</ListItemText>
 </ListItem>

 <ListItem  divider="true" className="dashh">
  <ListItemText>#110</ListItemText>
  <ListItemText> 16 Oct 2020</ListItemText>
  <ListItemText>General Checkup</ListItemText>
  <ListItemText>checkup.pdf</ListItemText>
  <ListItemText>Dr Darren bent</ListItemText>
 </ListItem>




   </List>
    </React.Fragment>
              );

          }

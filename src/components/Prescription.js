import React, { Component } from "react";
import { Link } from "react-router-dom";
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

export default function Prescription(props)  {
const classes = useStyles(props);
return (
    <React.Fragment>
    <List   className="appoid" >

   <ListItem divider="true"  className="hgt">
     <ListItemText  classes={{primary:classes.listItemText}}><b> Date</b></ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b>Name </b> </ListItemText>
     <ListItemText classes={{primary:classes.listItemText}}><b>Created By</b></ListItemText>
   </ListItem>
 <ListItem  divider="true" className="dashh">
  <ListItemText> 20 Nov 2020</ListItemText>
  <ListItemText >Prescription-1</ListItemText>
  <ListItemText >Dr Ruby Swinn </ListItemText>
 </ListItem>


 <ListItem  divider="true" className="dashh">
  <ListItemText> 12 Oct 2020</ListItemText>
  <ListItemText >Prescription-2</ListItemText>
  <ListItemText >Dr Linda Marks </ListItemText>
 </ListItem>

 <ListItem  divider="true" className="dashh">
  <ListItemText> 5  oct 2020</ListItemText>
  <ListItemText >Prescription-3</ListItemText>
  <ListItemText > Dr Harry Tim</ListItemText>
 </ListItem>


 <ListItem  divider="true" className="dashh">
  <ListItemText>23   Jan 2020</ListItemText>
  <ListItemText >Prescription-4</ListItemText>
  <ListItemText >Dr Mark Noble </ListItemText>
 </ListItem>



   </List>
    </React.Fragment>
              );

          }

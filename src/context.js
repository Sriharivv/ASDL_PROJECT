import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import { hospitalList,hospital  } from "./data0";
import $ from "jquery";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    hospitals:[],
    hospital:hospital,
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    bool:true,
    show: false,
    search:null,
    current:"Appoinment",
    appoinbg:"lightgrey",
    presbg:"",
    billbg:"",
    medrepbg:"",
    profsetbg:"",
  };
componentDidMount() {
    this.setProducts();
    this.setHospitals();

  }



  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  };


  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };

  setHospitals = () => {
    let hospitals = [];
    hospitalList.forEach(item => {
      const singleItem = { ...item };
      hospitals = [...hospitals, singleItem];
    });
    this.setState(() => {
      return { hospitals };
    }, this.checkCartItems);
  };


  showModal = () => {
     this.setState({ show: true });
   };

   hideModal = () => {
     this.setState({ show: false });
   };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
    console.log(id);
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

handleAppointments=()=>{
  this.setState(()=>{
    return {current: "Appoinment",
    appoinbg: "lightgrey",
    presbg:"",
    billbg:"",
    medrepbg:"",
    profsetbg:"",};
  });
};


handlePrescription=()=>{
  this.setState(()=>{
    return ( {current: "Prescription",
    presbg: "lightgrey",
    appoinbg:"",
    billbg:"",
    medrepbg:"",
    profsetbg:"",
      });
  });
};


handleBilling=()=>{
  this.setState(()=>{
    return ( {current: "Billing",
    presbg: "",
    appoinbg:"",
    billbg:"lightgrey",
    medrepbg:"",
    profsetbg:"",
      });
  });
};

handleMedRec=()=>{
  this.setState(()=>{
    return ( {current: "Medrec",
    presbg: "",
    appoinbg:"",
    billbg:"",
    medrepbg:"lightgrey",
    profsetbg:"",
      });
  });
};

handleProfset=()=>{
  this.setState(()=>{
    return ( {current: "ProfSet",
    presbg: "",
    appoinbg:"",
    billbg:"",
    medrepbg:"",
    profsetbg:"lightgrey",
      });
  });
};

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          searchSpace:this.searchSpace,
          handleAppointments:this.handleAppointments,
          handlePrescription:this.handlePrescription,
          handleMedRec:this.handleMedRec,
          handleProfset:this.handleProfset,
          handleBilling:this.handleBilling,
          }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

import React from 'react';
import '../stylesheets/index.css';
import { products } from "../data.json";
import Products from './Products';


function Main(props) {
  return (
   <div className="main flex-80">
       <Products data={products} selectedSize={props.selectedSize} handleAddToCart={props.handleAddToCart}/>
   </div>
  );
}

export default Main;

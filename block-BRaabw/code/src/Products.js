import React from 'react';
import '../stylesheets/App.css';
import data from "../data.json"
import EachProduct from './EachProduct';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizes : "",
            highToLowSortedPrice : "",
            LowToHighSortedPrice : "",
        }
    }

    handleSizes = (eachSize) => {
        this.setState({
            sizes : eachSize,
        })
    }

    handleHighToLow = (event) => {
            let allPrices = data.products;
            let sortedHighToLow = allPrices.sort((a, b) => b.price - a.price)
        this.setState({
            highToLowSortedPrice : sortedHighToLow,
        })
    }

    handleLowToHigh = () => {
        let allPrices = data.products;
        let sortedLowToHigh = allPrices.sort((a, b) => a.price - b.price);
        this.setState({
            LowToHighSortedPrice : sortedLowToHigh,
        })
    }

    render() {

        // filtering sizes
        let allSizes = [];
        data.products.map((product) => {
            product.availableSizes.map((eachSize) => {
                return allSizes.push(eachSize);
            })
        })

        let filteredSizes = Array.from(new Set(allSizes));
        // console.log(filteredSizes);

        //Rendering all data of products
        let allProducts = [];
        if(!this.state.sizes) {
            data.products.map((product) => {
                return allProducts.push(product);
            })    
        } else if (this.state.highToLowSortedPrice) {
            data.products.map((product) => {
                return allProducts.push(product)
            })
        } else {
            data.products.map((product) => {
                product.availableSizes.map((eachsize) => {
                   if(eachsize === this.state.sizes) {
                       return allProducts.push(product);
                   }
                })
            })
        }

 
        // console.log(allProducts);
        return (
            <>
             <section>
                 <div className="container">
                        <p className="sort_heading_size">Sort By Sizes</p>
                    <div className="total_section flex">
                        <div className="aside flex flex-30">

                            {
                              filteredSizes.map((eachSize) => {
                                  return (
                                      <div>
                                            <button  key={eachSize} className="size_buttons center" onClick={() => this.handleSizes(eachSize)}>{eachSize}</button>
                                      </div>
                                  )
                              })  
                            }

                           
                        </div>

                        <div className="flex-30 prices_sort">
                        <p className="sort_heading_price">Sort By Price</p>

                            <button className="sort_btn" onClick={this.handleHighToLow}>High To Low</button>
                            <button className="sort_btn" onClick={this.handleLowToHigh}>Low To High</button>
                        </div>
                    </div>
                        <section className="all_products_section">
                            <EachProduct  allProducts={allProducts} allSizes={this.state.sizes} />
                        </section>
                 </div>
             </section>
            </>
        );
    }
}

export default Products;

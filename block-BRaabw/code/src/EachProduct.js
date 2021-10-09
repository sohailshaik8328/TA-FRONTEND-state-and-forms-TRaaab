import React from "react";
import data from "../data.json";
import Products from "./Products";
import Cart from "./Cart";

class EachProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size : "",
            cart : "", 
            product : [],
        };
    }
    handleCart = (eachProduct, index) => {
        this.setState({
            cart : index,
            product : [...this.state.product, eachProduct]
        })
    }



    render() {
        var products = this.props.allProducts;

        return (
            <>
                <section className="flex wrap all_cards_section ">
                {
                   products.map((product, index) => {
                        return (
                            <div key={product.id} className=" card flex-30 max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="px-4 py-2">
                                    <h1 className=" title text-3xl font-bold text-gray-800 uppercase dark:text-white">{product.title}</h1>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{product.style}</p>
                                </div>

                                <img className=" image  w-full  mt-2" src={`/images/products/${product.sku}_1.jpg`} alt={`${product.sku}`} />

                                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                                    <h1 className="text-lg font-bold text-white">{product.currencyFormat + product.price}</h1>
                                    <button onClick={() => this.handleCart(product, index)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        )
                   })
                }

            </section>
            <Cart product={this.state.product}  cartFunc={this.handleCart} />
            </>
        )
    }
}

export default EachProduct;

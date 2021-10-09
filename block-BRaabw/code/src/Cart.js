import React from 'react';
import data from "../data.json";
import CartProducts from './CartProducts';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle : false,
            cartProductsList : this.props.product 
        }
    }

    handleClickCart = () => {
        this.setState({
            toggle : !this.state.toggle,
        })
    }

    render() {
        var product = this.props.product
        console.log(product, "asdfasdfads")
        return (
           <>
             <div className=" w-4/12 fixed top-0 right-0 bg-black">
                <div>
                    {this.state.toggle ? <i className="fas fa-times text-white bg-black p-2 px-4 text-xl absolute -left-8 top-0" onClick={this.handleClickCart}></i> : <img className="bag_icon" src="/images/bag-icon.png" alt="bag-icon" onClick={this.handleClickCart} />}
                </div>
                <div>
                    {this.state.toggle ? <CartProducts  className="fixed top-2 right-4 " cartProducts={product} /> : ""}
                </div>
             </div>
            
           </>

        )
    }
}

export default Cart;
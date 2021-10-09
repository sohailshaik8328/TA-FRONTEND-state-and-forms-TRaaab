import React from 'react';
import '../stylesheets/index.css';
import CartItem from './CartItem';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
        }
    }

    close = () => {
        this.setState({
            isOpen : false,
        })
    }

    open = () => {
        this.setState({
            isOpen : true,
        })
    }

    render() {
        let { isOpen } = this.state;
        let totalQuantity = this.props.cartItems.reduce((acc, cv) => {
            acc = acc + cv.quantity
            return acc;
        }, 0)

        let totalAmount = this.props.cartItems.reduce((acc, cv) => {
            acc = cv.price * cv.quantity
            return acc;
        }, 0)
        if(!isOpen) {
            return <ClosedCart open={this.open} totalQuantity={totalQuantity} />
        }

        return (
            <div>
                <aside className="cart" >
                    <div onClick={this.close} className="close-btn">X</div>
                    <div className="cart-body">
                        <div className="cart-heading">
                            <div className="cart-icon">
                                <img src="/images/bag-icon.png" className="icon" />
                                <span className="item-count">
                                    {
                                        totalQuantity
                                    }
                                </span>
                            </div>
                            <h2>Cart</h2>
                        </div>
          
                        {
                            this.props.cartItems.map((item) => (
                                <CartItem key={item} {...item} incrementQuantity={this.props.incrementQuantity} decrementQuantity={this.props.decrementQuantity} deleteItem={this.props.deleteItem} />
                            ))
                        }

                        <div className="cart-checkout">
                            <div>
                                <p>Total</p>
                                <p>$ {totalAmount}</p>
                            </div>
                            <button onClick={() => alert(`You have to pay ${totalAmount}`)}>CHECKOUT</button>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}

function ClosedCart(props) {
    return (
        <div className="close-cart">
            <span onClick={props.open} className="open-btn">
                <div className="cart-icon">
                    <img src="/images/bag-icon.png" className="icon" />
                    <span className="item-count">{props.totalQuantity}</span>
                </div>
            </span>
        </div>
    )
}

export default Cart;

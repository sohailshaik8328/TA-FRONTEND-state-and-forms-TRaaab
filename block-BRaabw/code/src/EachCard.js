import React from 'react';

class EachCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity : 1,
        }
    }

    addQuantity = () => {
        this.setState({
            quantity : this.state.quantity + 1
        })
    }

    removeQuantity = () => {
        this.setState({
            quantity : this.state.quantity -1
        })
    }
    handleDelete = () => {
        
    }

    render() {
        var eachProduct = this.props.eachProduct;
        return (
            <>
                <div className="cart_card flex w-full">
                    {/* <i onClick={this.handleDelete} className="fas fa-times cross_each"></i> */}

                        <div>
                            <img className="cart_img" src={`/images/products/${eachProduct.sku}_2.jpg`} /> 
                        </div>
                        <div>
                            <h2 className="cart_title">{eachProduct.title}</h2>
                            <p className="cart_desc">{eachProduct.description}</p>
                            <p className="cart_price">{eachProduct.currencyFormat + eachProduct.price}</p>
                            <h3 className="cart_quantity">Quatity : {this.state.quantity}</h3>
                            <button onClick={this.addQuantity} className="plus ">+</button>
                            <button onClick={this.removeQuantity} className="minus ">-</button>
                        </div>      
                </div>
            </>
        )
    }

}

export default EachCard;
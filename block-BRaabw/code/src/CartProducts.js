import React from 'react';
import EachCard from './EachCard';

class CartProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity : 1,
            product : this.props.cartProducts,
        }
    }

    handleDelete = (eachProduct, index) => {
        this.setState({
            product : this.state.product.splice(0, 1)
        })

    }
   

    render() {
        var product = this.props.cartProducts
        return(
            <>

                <div className="h-screen overflow-y-scroll">
                {
                    product.map((eachProduct, index) => (
                        <>

                        <i onClick={() => this.handleDelete()} className="fas fa-times cross_each"></i>
                        <EachCard eachProduct={eachProduct} index={index} />    
                       </>
                    ))
                }
                </div>

                <div>
                    <h2 className="total_price">Total</h2>
                </div>
            </> 
        )
    }
}


export default CartProducts;
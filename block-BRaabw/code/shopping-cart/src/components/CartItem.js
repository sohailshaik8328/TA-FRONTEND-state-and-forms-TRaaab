import React from "react";

function CartItem(props) {
    return (
        <div className="cart-item">
            <img src={`/images/products/${props.sku}_2.jpg`} width="80" />
            <div className="cart-item-details">
                <p className="cart-item-title">{props.title}</p>
                <p>{props.availableSizes[0]} | {props.style}</p>
                <p>Quantity : {props.quantity}</p>
            </div>
            <div className="cart-price">
                <p className="cart-cross" onClick={() => props.deleteItem(props.id)}>X</p>
                <p className="price">{props.currencyFormat + props.price}</p>
                <div>
                    <Increment incrementQuantity={() => props.incrementQuantity(props.id)}/>
                    <Decrement  decrementQuantity={() => props.decrementQuantity(props.id)}  />
                </div>
            </div>

        </div>
    )
}

function Increment(props) {
    return (
        <button onClick={props.incrementQuantity}>+</button>
    )
}

function Decrement(props) {
    return (
        <button onClick={props.decrementQuantity}>-</button>
    )
}

export default CartItem;
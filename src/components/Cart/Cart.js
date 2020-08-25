import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    // let totalPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const element = cart[i];
    //     totalPrice += element.price;  
    // }

    const tax = totalPrice/5;
    let shippingCost = 0
    if(totalPrice>50){
        shippingCost = 0;
    }
    else if(totalPrice>25){
        shippingCost = 4.99;
    }
    else if(totalPrice>0){
        shippingCost= 10.99;
    }
    const grandTotal = totalPrice + tax + shippingCost;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return parseFloat(precision);
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <h4>Product Price: {formatNumber(totalPrice)}</h4>
            <h4>Tax: {formatNumber(tax)}</h4>
            <h4>Shipping Cost: {shippingCost}</h4>
            <h4>Grand Total: {formatNumber(grandTotal)}</h4>
        </div>
    );
};

export default Cart;
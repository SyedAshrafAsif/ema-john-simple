import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name,seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="img-adjust">
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{name}</h3> <br/>
                <p><small>by {seller}</small></p> <br/>
                <h4>${price}</h4>
                <p><small>only {stock} are left. --Order soon!</small></p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div> 
        </div>
    );
};

export default Product;
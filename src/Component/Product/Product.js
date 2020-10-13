import React from 'react';
import { Button } from 'react-bootstrap';
import "./Product.css"
const Product = ({product}) => {
    const {name, img, price}= product
    return (
        <div className="product">
                <div className="flex">
                <img src={img} alt=""/>
                    <div>
                    <h5>{name}</h5>
                    <p>Price : {price}</p>
                    </div>
                </div>
                  <Button variant="primary"  block>  Block level button</Button>

                

        </div>
    );
};

export default Product;
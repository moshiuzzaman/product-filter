import React from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import { useContext } from 'react';
import { CatContext } from '../../App';
const Shop = () => {
    const products = fakeData;
    const [category] =useContext(CatContext)
    let categoryProduct;
    if(category==='camera' || category==='android'|| category==='laptop'){
        categoryProduct =products.filter(pd=>pd.category=== category);
    }else{
        categoryProduct =products
    }
     

    console.log(categoryProduct);
    console.log(category);
    return (
        <div >
            <h1>Category is Selected : {category}</h1> 
            {
                categoryProduct.map(pd=><Product product={pd}></Product>)
            }
        </div>
    );
};

export default Shop;
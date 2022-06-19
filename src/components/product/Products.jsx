import React from 'react'
import './Products.css';
const Products = ({ title, image, price, rating}) => {
  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
             <div className="product__rating">
                  {
                     Array(rating).fill().map((_,i) => (
                      <p>⭐</p>
                     )) 
                    }
             </div>
        </div>
        <img src={image} alt="productImage" />
        <button>Add to Basket</button>
    </div>
  )
}

export default Products
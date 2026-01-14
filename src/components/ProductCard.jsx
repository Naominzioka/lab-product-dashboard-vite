import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button } from '@mui/material';



const ProductCard = ({ product, onRemove }) => {
  //i use 'outOfStockClass' only if the item is not in stock
  const cardClass = product.inStock ? styles.productCard : styles.outOfStockClass;

  {/*  Apply conditional class to <div> above for out-of-stock items */ }
  return (
    < div className={cardClass} >

      {/*  Display product name */}
      < h3 > {product.name}</h3 >
      {/*  Display product price */}
      < p > {product.price}</p >
      {/*  Show if the product is in stock or out of stock */}
      
      {/* Conditional color: we use ternary here ? to switch color. Green for in stock, Red for out of stock */}
      <p style={{ color: product.inStock ? "green" : "red" }}>
        {product.inStock ? "In stock" : "Out of Stock"}</p >

      {/* Button calls the onRemove function passed down from App.js */}
      <Button
        variant='contained'
        color='error'
        onClick={() => onRemove(product.id)}>Remove</Button>
    </div >
  );
};

export default ProductCard;

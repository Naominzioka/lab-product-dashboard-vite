import React from 'react';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid2';


//this component recieves the items list and organizes them into a layout
const ProductList = ({ products, onRemove }) => {
  //  Check if the product list is empty and display a message if needed
  if (!products || products.length === 0) {
    return <p>No products found</p>
  }

  return (
    <Grid container spacing={3} justifyContent={"center"}>
      {/*  we loop through the products array and create a card for each product */}
      {products.map((product) => (
        <Grid size={{xs: 12, sm: 6}} key={product.id} className='product-card'>
        <ProductCard product={product} onRemove={onRemove}/>
    </Grid>
      ))}
  </Grid>
  );
};



export default ProductList;

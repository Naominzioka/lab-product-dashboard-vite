import React, { useState } from 'react';
import ProductList from './components/ProductList';



const App = () => {
  // Define initial product data
 const sampleProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
]


  // Implement state to manage filtering
  const [products, setProducts] = useState(sampleProducts)
  const [filter, setFilter] = useState("all")

  //function to remove a product entirely from the array
  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts) 
  }

//Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === "inStock") return product.inStock;
    if (filter === "outOfStock") return !product.inStock;
    return true;
  })

  return (
    <div>
      <h1>Product Dashboard</h1>
     
      {/* Add buttons to allow filtering by availability */}
       <div>
      <button style={{margin: "10px"}} onClick={() => setFilter("all")}>All</button>
      <button style={{margin: "10px"}} onClick={() => setFilter("inStock")}>InStock</button>
      <button style={{margin: "10px"}} onClick={() => setFilter("outOfStock")}>Out of stock</button>
     </div>
      {/* Render the ProductList component and pass filtered products */}
    <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
    </div>
  );
};

export default App;

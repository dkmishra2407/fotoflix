import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { fetchallProducts } from '../lib/apis'; // Assuming fetchallProducts is correctly imported

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchallProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;

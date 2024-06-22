import { useState, useEffect } from "react";
import axios from "axios";
import "../Cse/ProductDisplay.css";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:8000/api/products', {
        params: { size: filter },
      });
      setProducts(data);
    };
    fetchProducts();
  }, [filter]);

  return (
    <div className="container">
      <div className="filter-buttons">
        <button onClick={() => setFilter('X')}>X</button>
        <button onClick={() => setFilter('XL')}>XL</button>
        <button onClick={() => setFilter('XXL')}>XXL</button>
        <button onClick={() => setFilter('XXXL')}>XXXL</button>
        <button onClick={() => setFilter('M')}>M</button>
        <button onClick={() => setFilter('L')}>L</button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={`http://localhost:8000/${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;

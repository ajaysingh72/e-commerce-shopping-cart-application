
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import products from '../data/products.json';

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div>
      <Navbar cartItemCount={cart.length} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className="relative border p-4">
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 rounded">
        Add to Cart
      </button>
      {showNotification && (
        <div className="absolute top-0 right-0 bg-green-500 text-white p-2 rounded">
          {product.name} added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;

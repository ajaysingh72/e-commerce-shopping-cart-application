import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart(); // Use updateCartItemQuantity to handle quantity updates
  const [fixedDiscount, setFixedDiscount] = useState(0);
  const [percentageDiscount, setPercentageDiscount] = useState(0);
  const router = useRouter();

  const handleQuantityChange = (productId, newQuantity) => {
    // Ensure the quantity is at least 1
    const quantity = Math.max(1, newQuantity);
    updateCartItemQuantity(productId, quantity); // Update the quantity in the cart context
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, product) => sum + product.price * (product.quantity || 1), 0);
  };

  const calculateTotalPrice = () => {
    const subtotal = calculateSubtotal();
    const priceAfterFixedDiscount = subtotal - fixedDiscount;
    const priceAfterPercentageDiscount = priceAfterFixedDiscount - (priceAfterFixedDiscount * percentageDiscount / 100);
    return Math.max(priceAfterPercentageDiscount, 0); // Ensure total doesn't go negative
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center border-b py-2">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                      className="bg-gray-300 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={product.quantity || 1}
                      min="1"
                      className="w-16 text-center border"
                      onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                    />
                    <button
                      onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                      className="bg-gray-300 px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="font-bold">Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={fixedDiscount}
                onChange={(e) => setFixedDiscount(Number(e.target.value))}
                placeholder="Fixed Discount ($)"
                className="border p-1"
              />
              <span>Fixed Discount</span>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={percentageDiscount}
                onChange={(e) => setPercentageDiscount(Number(e.target.value))}
                placeholder="Percentage Discount (%)"
                className="border p-1"
              />
              <span>Percentage Discount</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${calculateTotalPrice().toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

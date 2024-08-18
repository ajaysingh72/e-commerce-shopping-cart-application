const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
      <div className="flex-1 ml-4">
        <h4 className="text-lg">{item.name}</h4>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
      </div>
      <button className="ml-4 text-red-500" onClick={() => removeItem(item)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;

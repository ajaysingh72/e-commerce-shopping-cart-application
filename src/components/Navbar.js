import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link href="/" legacyBehavior>
        <a className="text-xl font-bold">Our Products</a>
      </Link>
      <Link href="/cart" legacyBehavior>
        <a>
          Cart ({cart.length})
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;

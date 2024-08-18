// import '../styles/globals.css';
// import Link from 'next/link';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <nav className="bg-gray-800 p-4 text-white">
//         <div className="container mx-auto">
//           <Link href="/" className="mr-4">Home</Link>
//           <Link href="/cart">Your Cart</Link>
//         </div>
//       </nav>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

import '../styles/globals.css';
import { CartProvider } from '../context/CartContext'; // Import CartProvider

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

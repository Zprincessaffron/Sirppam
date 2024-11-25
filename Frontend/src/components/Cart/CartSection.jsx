import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CartSection = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Modern Sculpture',
      image: '/Sculpt.png',
      price: 15000,
      quantity: 1,
      size: "2 Feet",
    },
    {
      id: 2,
      name: 'Abstract Painting',
      image: '/Paint.jpg',
      price: 20000,
      quantity: 2,
      size: "5 Feet",
    },
  ];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center bg-white text-black min-h-screen p-6 lg:p-12">
      <h2 className="text-2xl font-semibold mb-16 w-full max-w-3xl text-center uppercase tracking-widest border-b border-black pb-4">
        Your Cart
      </h2>

      <div className="w-full max-w-3xl tracking-wider">
        <ul className="space-y-6">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 border border-black rounded-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover border border-black"
                />
                <div>
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-xs text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-xs font-medium">Size: {item.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium">Quantity: {item.quantity}</span>
                  </div>
                </div>
              </div>
              <button>
                <FiTrash2 className="text-md text-black hover:text-red-500 bg-white transition-colors" />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-black pt-4">
          <div className="flex justify-between text-sm font-semibold">
            <span>Total:</span>
            <span>₹{calculateTotal().toFixed(2)}</span>
          </div>

          <div className='flex justify-center items-center'>
            <Link to="/checkout" className='w-fit mt-5'>
              <button className="border uppercase border-black px-6 py-2 tracking-widest hover:bg-black hover:text-white transition duration-300 text-xs">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;

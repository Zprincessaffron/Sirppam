import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './App.css';

const products = [
  { id: 1, name: 'Mahabalipuram Shore Temple Sculpture', price: '₹1,799', originalPrice: '₹19,999', image: 'Sculpt.png' },
  { id: 2, name: 'Mahabalipuram Shore Temple Sculpture', price: '₹1,799', originalPrice: '₹19,999', image: 'Sculpt.png' },
  { id: 3, name: 'Mahabalipuram Shore Temple Sculpture', price: '₹1,799', originalPrice: '₹19,999', image: 'Sculpt.png' },
  // Add more products as needed
];

const NewProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    focusOnSelect: true,
    beforeChange: (_, next) => setSelectedProduct(products[next]),
  };

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <div className={`product-card ${selectedProduct?.id === product.id ? 'zoom' : ''}`}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  {product.price} <span className="line-through text-gray-500">{product.originalPrice}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {selectedProduct && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50 p-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h2>
            <p className="text-lg mb-4 text-yellow-500">{selectedProduct.price} <span className="line-through text-gray-500">{selectedProduct.originalPrice}</span></p>
            <p className="text-gray-700 mb-4">This hand-crafted sculpture captures the essence of serenity and elegance...</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProduct;

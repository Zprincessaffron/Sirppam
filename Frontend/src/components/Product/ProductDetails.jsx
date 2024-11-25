import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  // Active image state for the gallery
  const [activeImage, setActiveImage] = useState(
    "https://via.placeholder.com/500"
  );

  // State for managing the current section being displayed
  const [activeSection, setActiveSection] = useState("Description");

  const images = [
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500/FF0000",
    "https://via.placeholder.com/500/00FF00",
    "https://via.placeholder.com/500/0000FF",
  ];

  // Content for each section
  const sectionContent = {
    Description: (
      <p>
        This hand-crafted sculpture captures the essence of serenity and
        elegance, inspired by classical artistry. Made from high-quality,
        durable materials, it is a centerpiece that adds a touch of refinement
        to any space. Each detail is carefully crafted to create an aura of
        tranquility and timeless beauty.
      </p>
    ),
    ProductInfo: (
      <>
        <p><strong>Material:</strong> Premium Resin with Bronze Finish</p>
        <p><strong>Dimensions:</strong> 18 x 12 x 8 inches (Height x Width x Depth)</p>
        <p><strong>Weight:</strong> 2.5 kg</p>
        <p><strong>Care Instructions:</strong> Wipe with a soft, damp cloth to maintain the finish. Avoid exposure to direct sunlight to prevent color fading.</p>
      </>
    ),
    MoreInfo: (
      <>
        <p><strong>Artist:</strong> Emma Caldwell</p>
        <p><strong>Collection:</strong> Eternal Serenity Collection</p>
        <p><strong>Ideal Placement:</strong> This sculpture is perfect for display on mantels, bookshelves, or side tables, especially in living rooms, offices, or entryways.</p>
        <p><strong>Special Features:</strong> Hand-painted details and a unique, textured base make each piece one-of-a-kind.</p>
      </>
    ),
  };

  return (
    <div className="p-4">
      <div className="flex justify-between space-x-8">
        {/* Left: Image Gallery */}
        <div className="w-1/2 sticky top-0 self-start">
          <div className="w-full h-[450px]">
            <img
              src={activeImage}
              alt="Main sculpture product"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="flex space-x-2 mt-4 justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover cursor-pointer ${
                  activeImage === image ? "border-2 border-yellow-500" : ""
                }`}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2">
          {/* Product Title and Pricing */}
          <h1 className="text-xl font-semibold mb-2 uppercase tracking-widest">
            Majestic Sculpture of Serenity
          </h1>
          <p className="text-yellow-600 mb-4 text-xs">⭐⭐⭐⭐⭐ 152 ratings • 25 reviews</p>
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xl font-medium">₹7,500.00</span>
            <span className="text-xl line-through text-gray-500">₹8,999.00</span>
          </div>

          {/* Tabs for Description, Product Info, and More Info */}
          <div className="mt-5">
            <div className="border-t border-b py-4 space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveSection("Description")}
                  className={`pb-2 tracking-widest text-sm ${
                    activeSection === "Description" ? "border-b-2 border-yellow-500" : ""
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveSection("ProductInfo")}
                  className={`pb-2 tracking-widest text-sm ${
                    activeSection === "ProductInfo" ? "border-b-2 border-yellow-500" : ""
                  }`}
                >
                  Product Info
                </button>
                <button
                  onClick={() => setActiveSection("MoreInfo")}
                  className={`pb-2 tracking-widest text-sm ${
                    activeSection === "MoreInfo" ? "border-b-2 border-yellow-500" : ""
                  }`}
                >
                  More Info
                </button>
              </div>

              {/* Display content based on the active section */}
              <div className="mt-4 text-xs tracking-wider">
                {sectionContent[activeSection]}
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="mt-4">
              {/* <h3 className="font-normal tracking-widest">Reviews (25)</h3>
              <div className="mt-4">
                <div className="border-b py-4">
                  <p className="font-normal tracking-wide text-sm">Ananya</p>
                  <p className="text-gray-500 text-xs">Mumbai • 22-08-2024</p>
                  <p className="mt-2 text-sm tracking-wider">
                    Absolutely beautiful! Adds so much character to my living room.
                  </p>
                </div>
                <div className="border-b py-4">
                  <p className="font-normal tracking-wide text-sm">Vikram</p>
                  <p className="text-gray-500 text-xs">Delhi • 15-08-2024</p>
                  <p className="mt-2 text-sm tracking-wider">
                    This sculpture is a masterpiece! Very well crafted and worth the price.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="mt-4 text-[0.7rem] text-center uppercase tracking-widest text-yellow-500 border-b border-yellow-500 w-fit pb-1 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in mb-3">
                  Load More
                </button>
              </div> */}

              <div className="flex justify-around gap-2">
                <button className="mt-4 text-[0.7rem] text-center uppercase tracking-widest border border-black w-1/2 px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-4">
              <h3 className="font-normal tracking-widest">Reviews (25)</h3>
              <div className="mt-4">
                <div className="border-b py-4">
                  <p className="font-normal tracking-wide text-sm">Ananya</p>
                  <p className="text-gray-500 text-xs">Mumbai • 22-08-2024</p>
                  <p className="mt-2 text-sm tracking-wider">
                    Absolutely beautiful! Adds so much character to my living room.
                  </p>
                </div>
                <div className="border-b py-4">
                  <p className="font-normal tracking-wide text-sm">Vikram</p>
                  <p className="text-gray-500 text-xs">Delhi • 15-08-2024</p>
                  <p className="mt-2 text-sm tracking-wider">
                    This sculpture is a masterpiece! Very well crafted and worth the price.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="mt-4 text-[0.7rem] text-center uppercase tracking-widest text-yellow-500 border-b border-yellow-500 w-fit pb-1 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in mb-3">
                  Load More
                </button>
              </div>

              {/* <div className="flex justify-around gap-2">
                <button className="mt-4 text-[0.7rem] text-center uppercase tracking-widest border border-black w-1/2 px-4 h-10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in mb-3">
                  Add to cart
                </button>
              </div> */}
            </div>
            
      {/* Recommended For You Section */}
      <div className="my-20">
        <h2 className="text-center text-2xl font-medium uppercase tracking-widest mb-12">
          Recommended For You
        </h2>
        <div className="grid grid-cols-3 gap-4 ">
            <ProductCard product={{ name: "Sculpture 1", price: 5000, id: 1 }} />
            <ProductCard product={{ name: "Sculpture 2", price: 7500, id: 2 }} />
            <ProductCard product={{ name: "Sculpture 3", price: 6000, id: 3 }} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import ProductCard from "../Product/ProductCard";
import { FiX } from "react-icons/fi";

const SculptureSection = () => {
  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  // Sample sculpture data
  const [sculptures] = useState([
    {
      id: 1,
      name: "Elegant Sculpture",
      price: 12000,
      size: "Medium",
      color: "White",
      description:
        "A beautifully crafted elegant sculpture that adds charm to your decor.",
      image: "path/to/elegant-sculpture.jpg",
    },
    {
      id: 2,
      name: "Abstract Sculpture",
      price: 15000,
      size: "Large",
      color: "Black",
      description:
        "An abstract sculpture that brings a modern touch to any space.",
      image: "path/to/abstract-sculpture.jpg",
    },
    {
      id: 3,
      name: "Classic Bust",
      price: 20000,
      size: "Small",
      color: "Marble",
      description:
        "A classic bust that reflects timeless artistry and elegance.",
      image: "path/to/classic-bust.jpg",
    },
  ]);

  // State for sorting and filtering
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [filterColor, setFilterColor] = useState("");

  // Function to handle sorting
  const sortedSculptures = [...sculptures].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  // Function to handle filtering
  const filteredSculptures = sortedSculptures.filter((sculpture) => {
    const matchesPrice =
      !filterPrice || sculpture.price <= parseInt(filterPrice);
    const matchesSize = !filterSize || sculpture.size === filterSize;
    const matchesColor = !filterColor || sculpture.color === filterColor;
    return matchesPrice && matchesSize && matchesColor;
  });

  return (
    <div className="p-6 bg-gray-100 relative">
      <h2 className="text-lg uppercase tracking-wider font-bold mb-4">Sculptures</h2>

      {/* Flex Container for Sort and Filter Options */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="border uppercase border-black px-6 py-2 tracking-widest hover:bg-black hover:text-white transition duration-300 text-xs"
        >
          Filter
        </button>

        {/* Sort Options */}
        <div>
          <label
            htmlFor="sortOrder"
            className="mr-2 text-xs uppercase tracking-widest"
          >
            Sort by Price:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-2 py-1 text-xs tracking-wider"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <div>

        {/* Filter Sidebar */}
      <div
        className={`absolute inset-y-0 left-0 w-64 p-4 bg-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <h3 className="text-md font-semibold mb-4 uppercase tracking-widest">
          Filters
        </h3>

        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-5 right-2 text-gray-600"
        >
          <FiX />
        </button>

        <div className="mt-10">
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block mb-1 text-xs uppercase tracking-widest"
            >
              Max Price:
            </label>
            <input
              type="number"
              id="price"
              placeholder="Max Price"
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              className="border px-2 py-1 w-full text-xs"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="size"
              className="block mb-1 text-xs uppercase tracking-widest"
            >
              Size:
            </label>
            <select
              id="size"
              value={filterSize}
              onChange={(e) => setFilterSize(e.target.value)}
              className="border rounded px-2 py-1 w-full text-xs uppercase tracking-widest"
            >
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="color"
              className="block mb-1 text-xs uppercase tracking-widest"
            >
              Color:
            </label>
            <select
              id="color"
              value={filterColor}
              onChange={(e) => setFilterColor(e.target.value)}
              className="border rounded px-2 py-1 w-full text-xs uppercase tracking-widest"
            >
              <option value="">All Colors</option>
              <option value="White">White Marble</option>
              <option value="Black">Black Marble</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-72" : ""
        }`}
      >
        {filteredSculptures.map((sculpture) => (
          <ProductCard
            key={sculpture.id}
            product={sculpture}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      </div>

      
    </div>
  );
};

export default SculptureSection;

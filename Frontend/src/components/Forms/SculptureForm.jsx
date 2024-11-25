import React, { useState } from "react";
import axios from "axios";

const SculptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    materialOptions: "",
    sizes: [
      {
        size: "",
        dimensions: {
          height: "",
          width: "",
          depth: "",
        },
        weight: "",
        price: "",
      },
    ],
    category: "",
    origin: "",
    careInstructions: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prev) => {
      const updated = { ...prev };
      const keys = name.split(".");
  
      if (keys[0] === "sizes") {
        // Handle nested sizes array
        const index = parseInt(keys[1]); // Get the index from the field name
        const field = keys[2]; // Get the specific field (size, dimensions, weight, price, etc.)
  
        if (field.startsWith("dimensions")) {
          const dimensionField = field.split(".")[1]; // e.g., height, width, depth
          updated.sizes[index].dimensions[dimensionField] = value;
        } else {
          updated.sizes[index][field] = value;
        }
      } else {
        updated[keys[0]] = value; // Handle other fields
      }
  
      return updated;
    });
  };
  

  // Handle image upload
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle adding a new size
  const addSize = () => {
    setFormData((prev) => ({
      ...prev,
      sizes: [
        ...prev.sizes,
        {
          size: "",
          dimensions: { height: "", width: "", depth: "" },
          weight: "",
          price: "",
        },
      ],
    }));
  };

  // Handle removing a size
  const removeSize = (index) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("image", image);
    Object.keys(formData).forEach((key) => {
      if (key === "sizes") {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("/api/sculptures", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Sculpture uploaded:", response.data);
      alert("Sculpture uploaded successfully!");
    } catch (error) {
      console.error("Error uploading sculpture:", error);
      alert("Error uploading sculpture.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Add a Sculpture</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Material Options</label>
          <input
            type="text"
            name="materialOptions"
            value={formData.materialOptions}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Comma-separated values"
          />
        </div>

        {formData.sizes.map((size, index) => (
          <div key={index} className="mb-4 border p-4 rounded bg-gray-200">
            <h3 className="text-lg font-bold">Size {index + 1}</h3>
            <div>
              <label className="block text-gray-700">Size</label>
              <input
                type="text"
                name={`sizes.${index}.size`}
                value={size.size}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Height</label>
              <input
                type="text"
                name={`sizes.${index}.dimensions.height`}
                value={size.dimensions.height}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Width</label>
              <input
                type="text"
                name={`sizes.${index}.dimensions.width`}
                value={size.dimensions.width}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Depth</label>
              <input
                type="text"
                name={`sizes.${index}.dimensions.depth`}
                value={size.dimensions.depth}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Weight</label>
              <input
                type="text"
                name={`sizes.${index}.weight`}
                value={size.weight}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name={`sizes.${index}.price`}
                value={size.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="button"
              onClick={() => removeSize(index)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove Size
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addSize}
          className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Size
        </button>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Origin</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Care Instructions</label>
          <textarea
            name="careInstructions"
            value={formData.careInstructions}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SculptureForm;

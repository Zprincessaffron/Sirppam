import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'sculpture', 
    description: '',
    dimensions: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the API
      const response = await axios.post('http://localhost:5000/api/enquiries', formData);
      console.log('Form submitted:', response.data);
      alert("Your inquiry has been submitted!");

      // Reset the form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: 'sculpture',
        description: '',
        dimensions: '',
        budget: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert("There was an error submitting your inquiry. Please try again later.");
    }
  };

  return (
    <div className='flex justify-start items-center '>
      <form onSubmit={handleSubmit} className="p-6 w-full max-w-2xl border text-xs">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-black p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-black p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full border border-black p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Type of Custom Work</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-black p-2"
            required
          >
            <option value="sculpture">Sculpture</option>
            <option value="painting">Painting</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your vision or idea for the custom work"
            className="w-full border border-black p-2"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Preferred Dimensions</label>
          <input
            type="text"
            name="dimensions"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="e.g., 2 feet"
            className="w-full border border-black p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Estimated Budget</label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Enter your budget range"
            className="w-full border border-black p-2"
          />
        </div>

        <div className='flex justify-center items-center'>

        <button
          type="submit"
          className="border uppercase border-black px-6 py-2 tracking-widest hover:bg-black hover:text-white transition duration-300 text-xs"
        >
          Submit Enquiry
        </button>

        </div>
        
      </form>
    </div>
  );
};

export default EnquiryForm;

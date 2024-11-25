import React, { useState } from 'react';
import SculptureProcess from './SculptureProcess';
import PaintingProcess from './PaintingProcess';
import EnquiryForm from './EnquiryForm';

const CustomPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Your inquiry has been submitted!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: 'sculpture',
      description: '',
      dimensions: '',
      budget: '',
    });
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-2xl uppercase tracking-wider font-semibold text-center mb-8">Custom Sculptures & Paintings</h1>

      {/* Process Explanation Section */}
      <div className="mb-12">
        {/* <h2 className="text-xl uppercase font-semibold mb-4">Our Custom Creation Process</h2> */}
        
        {/* Custom Sculpture Process */}
        <SculptureProcess/>

        {/* Custom Painting Process */}
        <PaintingProcess/>
        
      </div>

      {/* Inquiry Form */}
      <EnquiryForm/>
    </div>
  );
};

export default CustomPage;

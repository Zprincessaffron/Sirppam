import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        {status && <p className="mt-2 text-sm tracking-wider text-center">{status}</p>}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="5"
          required
        />
        <div className="flex justify-center items-center">
          <button type="submit" className="border uppercase border-black px-6 py-2 tracking-widest hover:bg-black hover:text-white transition duration-300 text-xs">
            Send Message
          </button>
        </div>
      </form>

      {/* Company Contact Information Section */}
      {/* <div className="mt-8 text-center">
        <h3 className="text-lg font-bold">Contact Information</h3>
        <p className="mt-2">Company Name: Your Company Name</p>
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Your Street, Your City, Your Country</p>
      </div> */}

      {/* Note Section */}
      {/* <div className="mt-8 text-center">
        <p className="italic text-sm text-gray-600">We value your feedback and inquiries. Please reach out to us anytime!</p>
      </div> */}
    </div>
  );
};

export default ContactUs;

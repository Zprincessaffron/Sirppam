import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";
import Modal from "./Modal"; // Import the Modal component

const UserProfile = ({ onClose }) => {
  const [showOrders, setShowOrders] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  // States for editing
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email] = useState("johndoe@example.com"); // Not editable
  const [password, setPassword] = useState("");

  const myOrders = [
    { id: 1, item: "Elegant Sculpture", price: "120", status: "Delivered" },
    { id: 2, item: "Abstract Painting", price: "150", status: "Pending" },
  ];

  const orderHistory = [
    {
      id: 3,
      item: "Vintage Clock",
      price: "80",
      date: "2023-09-15",
      status: "Delivered",
    },
    {
      id: 4,
      item: "Modern Chair",
      price: "200",
      date: "2023-08-22",
      status: "Returned",
    },
  ];

  const handleSave = () => {
    // Save logic can go here
    setIsEditing(false);
    setPassword("");
  };

  return (
    <>
      <motion.div
        className="absolute right-0 bg-white shadow-md p-4 w-64 rounded-sm border border-gray-200 z-50"
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -10 }}
      >
        <div className="flex items-center space-x-4 mb-4 justify-between">
          <div>
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 text-black-500 border border-black p-1 uppercase tracking-wider text-[0.65rem]"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Orders and Order History buttons */}
        <div className="mt-4 space-y-2 text-xs tracking-wider">
          <button
            onClick={() => setShowOrders((prev) => !prev)}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center transition"
          >
            My Orders
            <span>
              {showOrders ? <GoPlus className="rotate-45" /> : <GoPlus />}
            </span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showOrders ? "auto" : 0,
              opacity: showOrders ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden ml-4 mt-2"
          >
            {myOrders.map((order) => (
              <div
                key={order.id}
                className="border-b py-2 flex justify-between"
              >
                <span>{order.item}</span>
                <span>₹{order.price}</span>
              </div>
            ))}
          </motion.div>

          <button
            onClick={() => setShowOrderHistory((prev) => !prev)}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center transition"
          >
            Order History
            <span>
              {showOrderHistory ? <GoPlus className="rotate-45" /> : <GoPlus />}
            </span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showOrderHistory ? "auto" : 0,
              opacity: showOrderHistory ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden ml-4 mt-2"
          >
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="border-b py-2 flex justify-between"
              >
                <span>{order.item}</span>
                <span>₹{order.price}</span>
                <span className="text-[0.6rem] text-gray-500">
                  {order.date}
                </span>
              </div>
            ))}
          </motion.div>

          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
            Logout
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-red-500 underline float-end text-xs underline-offset-2"
        >
          Close
        </button>
      </motion.div>

      {/* Modal for editing user profile */}
      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <h2 className="text-sm tracking-wider uppercase font-semibold mb-4">
            Edit Profile
          </h2>
          <div className="mb-2 text-xs">
            <label className="block text-xs font-medium mb-1">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none"
            />
          </div>
          <div className="mb-2 text-xs">
            <label className="block text-xs font-medium mb-1">Email:</label>
            <input
              type="text"
              value={email}
              readOnly
              className="border border-gray-300 rounded w-full p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="mb-4 text-xs">
            <label className="block text-xs font-medium mb-1">
              New Password:
            </label>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 focus:outline-none"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSave}
              className="mt-4 text-black-500 border border-black p-2 uppercase tracking-wider text-xs"
            >
              Save
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserProfile;

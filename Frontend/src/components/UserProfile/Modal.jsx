// Modal.js
import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button onClick={onClose} className="text-red-500 underline float-end text-xs underline-offset-2">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

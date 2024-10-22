import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-4 sm:p-6 rounded shadow-lg w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 bg-white text-black rounded-sm hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
        <div className="mt-8 sm:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 top-0 left-0 px-4 shadow-md z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">{event.name}</h2>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} className="mt-4" />
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white rounded-lg px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;

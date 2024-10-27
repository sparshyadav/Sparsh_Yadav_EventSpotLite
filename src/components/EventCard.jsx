import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-lg font-bold mt-2">{event.name}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
      <button onClick={onClick} className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2">
        View Details
      </button>
    </div>
  );
};

export default EventCard;

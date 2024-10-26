import React, { useState } from 'react';
import EventModal from './EventModal.jsx';
import { events } from '../data.js';
import EventCard from './EveneCard.jsx';

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="flex flex-wrap justify-between">
        {events.map(event => (
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-4" key={event.id}>
            <EventCard event={event} onClick={() => handleCardClick(event)} />
          </div>
        ))}
      </div>
      <EventModal event={selectedEvent} onClose={handleCloseModal} />
    </div>
  );
};

export default EventList;

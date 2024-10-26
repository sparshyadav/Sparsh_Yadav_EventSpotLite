import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import { events } from '../data';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
        ))}
      </div>
      <EventModal event={selectedEvent} onClose={handleCloseModal} />
    </div>
  );
};

export default EventList;

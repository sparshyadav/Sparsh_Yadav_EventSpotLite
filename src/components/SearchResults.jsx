import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { events } from '../data.js'; // Import your events data
import EventCard from './EventCard.jsx';
import EventModal from './EventModal.jsx';
import Navbar from './Navbar.jsx';

const SearchResults = () => {
    const query = new URLSearchParams(useLocation().search).get('q') || '';
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase())
    );

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleCardClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4 bg-[#1F182F] py-32 relative">
                <h1 className="text-3xl font-bold mb-4 text-white">Search Results for "{query}"</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(event => (
                            <div className="mb-4" key={event.id}>
                                <EventCard event={event} onClick={() => handleCardClick(event)} />
                            </div>
                        ))
                    ) : (
                        <p className="text-white">No results found.</p>
                    )}
                </div>
                <EventModal event={selectedEvent} onClose={handleCloseModal} />
            </div>
        </>
    );
};

export default SearchResults;

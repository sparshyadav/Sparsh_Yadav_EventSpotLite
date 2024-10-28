import React, { useState } from 'react';
import EventModal from './EventModal.jsx';
import { events } from '../data.js';
import EventCard from './EventCard.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={onClick}>
    <button className="bg-white rounded-full p-2 shadow">→</button>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={onClick}>
    <button className="bg-white rounded-full p-2 shadow">←</button>
  </div>
);

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const delhiEvents = events.filter(event => event.location.includes("Delhi"));
  const mumbaiEvents = events.filter(event => event.location.includes("Mumbai"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto p-4 bg-[#2a2438] py-20 relative">
      <h1 className="text-3xl font-bold mb-4 text-white">Upcoming Events in Delhi</h1>
      <Slider {...settings}>
        {delhiEvents.map(event => (
          <div className="mb-4 " key={event.id}>
            <EventCard event={event} onClick={() => handleCardClick(event)} />
          </div>
        ))}
      </Slider>

      <h1 className="text-3xl font-bold mb-4 text-white mt-8">Upcoming Events in Mumbai</h1>
      <Slider {...settings}>
        {mumbaiEvents.map(event => (
          <div className="mb-4 px-4" key={event.id}>
            <EventCard event={event} onClick={() => handleCardClick(event)} />
          </div>
        ))}
      </Slider>

      <EventModal event={selectedEvent} onClose={handleCloseModal} />
    </div>
  );
};

export default EventList;


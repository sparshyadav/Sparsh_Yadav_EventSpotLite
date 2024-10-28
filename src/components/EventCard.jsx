// import React from 'react';

// const EventCard = ({ event, onClick }) => {
//   return (
//     <div className="border bg-[#5c5470] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
//       <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-t-lg" />
//       <h2 className="text-lg font-bold mt-2">{event.name}</h2>
//       <p className="text-white">{event.date}</p>
//       <p className="text-white">{event.location}</p>
//       <button onClick={onClick} className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2">
//         View Details
//       </button>
//     </div>
//   );
// };

// export default EventCard;



import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div onClick={onClick} className="relative border bg-[#5c5470] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 pointer-events-none w-[350px]">
      <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="absolute inset-0 flex flex-col bg-black bg-opacity-50 text-white rounded-lg p-4">
        <h2 className="text-lg font-bold">{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        {/* <button onClick={onClick} className="mt-2 bg-blue-500 text-white rounded-lg px-4 py-2">
          View Details
        </button> */}
      </div>
    </div>
  );
};

export default EventCard;

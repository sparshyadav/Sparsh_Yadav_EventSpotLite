// src/App.jsx
import React from 'react';
import VideoBackground from './components/VideoBackground';
import EventList from './components/EventList.jsx';

const App = () => {
  return (
    <div>
      <VideoBackground />
      <EventList />
    </div>
  );
};

export default App;

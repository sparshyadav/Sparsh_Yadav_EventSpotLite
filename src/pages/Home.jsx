import React from 'react'
import VideoBackground from '../components/VideoBackground.jsx'
import EventList from '../components/EventList.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
    return (
        <div>
            <Navbar />
            <VideoBackground />
            <EventList />
            <Footer />
        </div>
    )
}

export default Home

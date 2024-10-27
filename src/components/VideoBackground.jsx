import React from 'react';
import video from "../assets/video2.mp4";

const VideoBackground = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <video 
                autoPlay 
                loop 
                muted 
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 z-0"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center bg-black bg-opacity-50">
                <div>
                    <h1 className="text-4xl font-bold">EventSpotLite</h1>
                    <p className="mt-4 text-lg">Your goto place for events happening near you.</p>
                </div>
            </div>
        </div>
    );
};


export default VideoBackground;

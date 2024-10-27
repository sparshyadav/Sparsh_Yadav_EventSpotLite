import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className="h-20 w-full bg-gradient-to-r from-slate-600 to-gray-400 fixed top-0 left-0 flex items-center justify-between px-4 shadow-md z-50">
            <div className="text-xl font-bold text-white">EventSpotLite</div>
            <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white rounded-full py-2 pl-10 pr-4 focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <FaSearch />
                    </span>
                </div>
                <Link to="/login" className="text-blue-500">Login</Link>
                <Link to="/register" className="text-blue-500">Register</Link>
            </div>
            <div className="flex md:hidden items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    ☰
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-slate-600 to-gray-400 md:hidden">
                    <div className="flex flex-col items-center py-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-white rounded-full py-2 pl-10 pr-4 focus:outline-none"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <FaSearch />
                            </span>
                        </div>
                        <Link to="/login" className="text-blue-500 py-2">Login</Link>
                        <Link to="/register" className="text-blue-500 py-2">Register</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

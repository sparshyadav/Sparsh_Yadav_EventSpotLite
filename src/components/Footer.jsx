import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-700 to-slate-900 h-25 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} EventSpotLite. All rights reserved.
                </p>
                <div className="mt-2">
                    <a href="/privacy" className="text-blue-500 hover:underline mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-blue-500 hover:underline mx-2">Terms of Service</a>
                    <a href="/contact" className="text-blue-500 hover:underline mx-2">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

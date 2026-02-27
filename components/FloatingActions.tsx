import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
            <button className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
                <Facebook size={20} />
            </button>
            <button className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
                <Instagram size={20} />
            </button>
            <button className="bg-emerald-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
                <MessageCircle size={20} />
            </button>
            <button className="bg-blue-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
                <Phone size={20} />
            </button>
        </div>
    );
};

export default FloatingActions;

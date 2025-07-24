
import React, { useState, useEffect } from 'react';
import { X, Instagram } from 'lucide-react';

const InstagramFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInstagram = () => {
    window.open('https://www.instagram.com/rmbeauty.distr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-end flex-col">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs service-card animate-slide-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">Siga-nos no Instagram!</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Acompanhe nossos produtos, novidades e dicas de beleza!
          </p>
          <button
            onClick={handleOpenInstagram}
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-md flex items-center justify-center"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Seguir @rmbeauty.distr
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="instagram-btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-xl flex items-center justify-center relative overflow-hidden"
        aria-label="Instagram"
      >
        <div className="absolute inset-0 bg-white opacity-30 instagram-ripple"></div>
        <Instagram className="w-8 h-8" />
      </button>
    </div>
  );
};

export default InstagramFloatingButton;

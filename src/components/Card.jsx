// src/components/FeatureCard.jsx

import React from 'react';


const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="
      bg-gradient-to-br from-violet-600/30 to-black/80 
      border-1 border-gray-700 rounded-xl p-6 md:p-8 
      flex flex-col items-center text-center space-y-4 
      shadow-2xl shadow-black/80 hover:-translate-y-1 
      hover:shadow-3xl 
      hover:shadow-violet-500/50 
      hover:border-violet-500 transition-all duration-300
      
    ">
      {/* Icon */}
      <div className="
        p-4 rounded-full bg-blue-600/20 text-blue-400 
        flex items-center justify-center 
        ring-2 ring-blue-500/50 
        mb-2
        transition-transform duration-300 ease-in-out hover:rotate-20
      ">
        {/* Render the icon component passed as a prop, with desired size */}
        <Icon className="h-8 w-8 md:h-10 md:w-10   " />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-base md:text-lg max-w-sm">
        {description}
      </p>
    </div>
  );
};

export default Card;
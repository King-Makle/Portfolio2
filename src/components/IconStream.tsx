import React from 'react';
import { appIcons } from '../data/appIcons';

const IconStream: React.FC = () => {
  return (
    <div className="icon-stream-wrapper relative w-full overflow-hidden py-8 md:py-12">
      <div className="icon-stream-content flex min-w-max animate-scroll-left-to-right">
        {/* First set of icons */}
        <div className="flex items-center gap-x-6">
          {appIcons.map((icon, index) => (
            <div key={`first-${index}`} className="icon-stream-item flex-shrink-0">
              <img
                src={icon}
                alt={`App Icon ${index}`}
                className="w-16 h-16 object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        {/* Second set of icons for seamless looping */}
        <div className="flex items-center gap-x-6 ml-6">
          {appIcons.map((icon, index) => (
            <div key={`second-${index}`} className="icon-stream-item flex-shrink-0">
              <img
                src={icon}
                alt={`App Icon ${index}`}
                className="w-16 h-16 object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconStream;
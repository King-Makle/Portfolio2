import React from 'react';
import { appIcons } from '../data/appIcons';

const IconStream: React.FC = () => {
  return (
    <div className="icon-stream-wrapper relative w-full overflow-hidden py-8 md:py-12">
      <div className="icon-stream-content flex w-[200%] animate-scroll-left-to-right">
        {/* Render icons twice for seamless looping */}
        <div className="flex w-1/2 justify-around items-center gap-x-8">
          {appIcons.map((icon, index) => (
            <div key={`first-${index}`} className="icon-stream-item flex-shrink-0">
              <img
                src={icon}
                alt={`App Icon ${index}`}
                className="w-16 h-16 object-contain rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center gap-x-8">
          {appIcons.map((icon, index) => (
            <div key={`second-${index}`} className="icon-stream-item flex-shrink-0">
              <img
                src={icon}
                alt={`App Icon ${index}`}
                className="w-16 h-16 object-contain rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconStream;
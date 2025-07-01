import React from 'react';
import { appIcons } from '../data/appIcons';

const IconStream: React.FC = () => {
  return (
    <div className="icon-stream-wrapper relative w-full overflow-hidden py-4 md:py-8 bg-gray-100 dark:bg-gray-900">
      <div className="icon-stream-content flex w-[200%] animate-scroll-left-to-right">
        {/* Render icons twice for seamless looping */}
        <div className="flex w-1/2 justify-around items-center gap-x-4">
          {appIcons.map((icon, index) => (
            <div key={`first-${index}`} className="icon-stream-item flex-shrink-0 p-2">
              <img
                src={icon}
                alt={`App Icon ${index}`}
                className="w-16 h-16 object-contain rounded-lg shadow-md bg-white dark:bg-gray-800 p-1"
              />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center gap-x-4">
          {appIcons.map((icon, index) => (
            <div key={`second-${index}`} className="icon-stream-item flex-shrink-0 p-2">
              <img
                src={icon}
                alt={`App Icon ${index}`}
                className="w-16 h-16 object-contain rounded-lg shadow-md bg-white dark:bg-gray-800 p-1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconStream;
import React, { useMemo, useState } from 'react';
import { eventData } from '../utils/events';
import { IoIosClose } from "react-icons/io";

const EventRegistration = () => {
  const [filter, setFilter] = useState([]);

  const filteredContent = useMemo(() => {
    if (filter.includes('all') || filter.length == 0) {
      return eventData;
    } else {
      return eventData.filter(event => filter.includes(event.category));
    }
  }, [filter]);
  console.log(filter);
  console.log(filteredContent);
  

  const handleFilterClick = (category) => {
    
    setFilter(prev => {
      if (prev.includes(category)) {
        return prev.filter(item => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="p-6 pt-32 bg-black h-screen">
      <div className='text-center pt-32 fixed top-0  z-10 bg-black w-full'>
        <div className="flex justify-center mb-6">
          <button
            className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => handleFilterClick('workshop')}
          >
            Workshops
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => handleFilterClick('event')}
          >
            Events
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => handleFilterClick('talk')}
          >
            Talks
          </button>
        </div>

        {filter.length > 0 && (
          <div className="text-start mb-6 flex flex-row justify-start items-center ">
            <h1 className="text-3xl font-semibold text-center mb-6">Filter: </h1>
            {filter.map((item, index) => (
              <span key={index} className="flex flex-row items-center bg-blue-500 mx-2 rounded-md">
                <span className="text-white py-1 px-2">
                  {item}
                </span>
                <IoIosClose
                  size={20}
                  onClick={() => setFilter(prev => prev.filter(i => i !== item))}
                  className="cursor-pointer"
                />
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-row items-center p-10 gap-10 flex-wrap overflow-scroll relative top-32">
        {filteredContent.map(event => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
            <p className="text-gray-600">Category: {event.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventRegistration;

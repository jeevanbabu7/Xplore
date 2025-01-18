import React, { useMemo, useState } from 'react';
import { AllEvents } from '../utils/events';
import { IoIosClose } from "react-icons/io";
import Event from '../components/Event';

const EventRegistration = () => {
  const [filter, setFilter] = useState([]);

  const filteredContent = useMemo(() => {
    if (filter.includes('all') || filter.length == 0) {
      return AllEvents;
    } else {
      return AllEvents.filter(event => filter.includes(event.category));
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
    <div className="pt-32 bg-black h-screen overflow-auto">
      <div className='text-center pt-32 fixed top-0  z-10  w-full bg-black'>
        <div className="flex justify-center sm:gap-3 mb-6 gap-8 bg-black">
        <button className="group relative overflow-hidden px-10 py-1 text-lg font-semibold text-[rgb(193,163,98)] border-2 border-[rgb(193,163,98)] rounded-full bg-transparent transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)] active:scale-100"
          onClick={() => handleFilterClick('all')}
        >
          <span className="absolute inset-0 text-sm z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[2.5]"></span>
          All
        </button>
        <button className="group relative overflow-hidden px-10 py-1 text-lg font-semibold text-[rgb(193,163,98)] border-2 border-[rgb(193,163,98)] rounded-full bg-transparent transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)] active:scale-100"
          onClick={() => handleFilterClick('workshop')}
        >
          <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[3.8]"></span>
          Workshops
        </button>
        <button className="group relative overflow-hidden px-10 py-1 text-lg font-semibold text-[rgb(193,163,98)] border-2 border-[rgb(193,163,98)] rounded-full bg-transparent transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)] active:scale-100"
          onClick={() => handleFilterClick('event')}
        >
          <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[2.8]"></span>
          Events
        </button>
        <button className="group relative overflow-hidden px-10 py-1 text-lg font-semibold text-[rgb(193,163,98)] border-2 border-[rgb(193,163,98)] rounded-full bg-transparent transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)] active:scale-100"
           onClick={() => handleFilterClick('talk')}
        >
          <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[2.5]"></span>
          Talks
        </button>
          
        
        </div>

        {filter.length > 0 && (
          <div className="text-start mb-6 flex flex-row justify-start items-center">
            <h1 className="text-3xl font-semibold text-[rgb(193,163,98)] mr-4">Filter:</h1>
            {filter.map((item, index) => (
              <span
                key={index}
                className="flex flex-row items-center bg-[rgb(193,163,98)] mx-2 rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:shadow-lg"
              >
                <span className="text-white py-1 px-3 font-medium">
                  {item}
                </span>
                <IoIosClose
                  size={24}
                  onClick={() => setFilter(prev => prev.filter(i => i !== item))}
                  className="cursor-pointer text-white hover:text-[rgb(41,41,41)] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
              </span>
            ))}
          </div>
        )}

      </div>

      <div className="flex flex-row items-center p-10 gap-10 flex-wrap overflow-auto relative top-32">
        {filteredContent.map(event => (
          // <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-4 text-center">
          //   <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
          //   <p className="text-gray-600">Category: {event.category}</p>
          // </div>
          <Event key={event.id} eventDetails={event} type={event.category} />
        ))}
      </div>
    </div>
  );
};

export default EventRegistration;

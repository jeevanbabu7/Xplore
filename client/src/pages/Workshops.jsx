import React from 'react'
import workshopBanner from '../assets/images/workshop-banner.png'
import Event from '../components/Event'
import {workshopData} from '../utils/eventData.js'
const Workshops = () => {
  return (
    <>
        <section className="w-full h-32 lg:h-48 md:h-48 md:h-[280px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${workshopBanner})` }}
          id="workshops"  
        >
         
        </section>
        <div
  style={{
    background: 'linear-gradient(45deg, rgba(75,0,130,0.6) 0%, rgba(0,0,0,1) 90%)',
  }}
  className="w-full md:h-screen lg:screen overflow-auto p-10 flex flex-row md:flex-wrap justify-center gap-20 pl-80 md:pl-0 lg:pl-0 "
>
  {workshopData.map((event, index) => {
    return <Event key={index} eventDetails={event} type="workshop" />;
  })}
</div>





   
    </>
  )
}

export default Workshops

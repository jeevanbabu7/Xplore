import React from 'react'
import eventBanner from '../assets/images/event-banner.png'
const Events = () => {
  return (
    <>
        <section className="absolute w-full h-48 md:h-[280px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${eventBanner})` }}>

        </section>
        <div style={{
        background: 'linear-gradient(159deg, rgba(253,1,48,1) 0%, rgba(200,1,38,1) 0%, rgba(173,1,33,1) 0%, rgba(160,1,31,1) 0%, rgba(149,1,29,1) 0%, rgba(141,1,27,1) 0%, rgba(126,1,24,1) 0%, rgba(89,0,17,1) 0%, rgba(140,1,27,1) 0%, rgba(62,1,12,1) 0%, rgba(90,1,18,1) 0%, rgba(90,1,18,1) 0%, rgba(91,1,18,1) 0%, rgba(71,1,14,1) 21%, rgba(36,0,7,1) 36%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 91%)',
        height: '100vh',
        width: '100%',
      }}>

        </div>
    </>
  )
}

export default Events

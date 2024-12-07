import React from 'react'
import viewBtn from '../assets/images/view-btn.png'
import event from '../assets/images/event.png'
import {useNavigate} from 'react-router-dom'
const Event = ({eventDetails}) => {
  const {name, description, date, time, location} = eventDetails;
  const navigate = useNavigate();
  return ( 
    <div className="relative h-[236px] w-[276px]">
  <img src={event} alt="event" className="w-full h-full" />
  <img
    src={viewBtn}
    alt="view"
    className="absolute -right-5 -bottom-3 w-[184px] h-[69px] hover:scale-110 hover:shadow-lg transition-transform duration-300"
    onClick={() => navigate('/event/:name')}
  />
  <p className="absolute top-5 left-5 font-bold text-2xl">{name}</p>
</div>

  )
}

export default Event

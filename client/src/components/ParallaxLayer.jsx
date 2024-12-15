import React, { useRef } from 'react'
import heroBg from '../assets/images/hero-bg3.jpg';
import date from "../assets/images/date-img.png";
import {motion, useScroll, useTransform} from 'framer-motion';
const ParallaxLayer = () => {
const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
 
  
  const text = "NATIONAL LEVEL MULTI-FEST"; 
  const textArray = text.split(""); 
  return (
    <section
        className="relative -top-16 w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, y: backgroundY }}
      >
        {/* <div className="absolute inset-0"></div> */}

        <motion.div className="h-screen mt-16 flex flex-col text-white relative md:gap-5 lg: gap-1" style={{y:textY}}>
          <div className="w-full flex flex-col items-center pt-10 sm:pt-52 md:pt-2 z-10">
          <motion.img
            src="./logo.png"
            className="sm:w-[80%] md:w-[35%]"
            alt="Hero"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeOut", 
            }}
          />
            <motion.p
              className="sm:text-5xl md:text-md lg:text-lg font-bold z-10 flex"
            >
              {textArray.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.05, 
                    duration: 0.05, 
                  }}
                >
                  {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <div className="w-full flex flex-col sm:justify-center items-center sm:flex-row pl-10 pr-10 flex-wrap md:gap-10 lg:gap-10 gap-20 py-8 md:justify-between lg:justify-between">

          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
                <form method="dialog" className='flex flex-row gap-10'>
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-success">Register</button>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
            <img
              src="./call-btn.png"
              className="w-52 h-10 sm:w-48 cursor-pointer animate-bounce transition-all ease-in-out duration-1500"
              alt="Register Now"
              onClick={()=>document.getElementById('my_modal_5').showModal()}
            />
            <img
              src={date}
              className="w-52 h-10 sm:w-48 cursor-pointer"
              onClick={() => navigate('/about')}
              alt="Date"
            />
          </div>
        </motion.div>
      </section>
  )
}

export default ParallaxLayer

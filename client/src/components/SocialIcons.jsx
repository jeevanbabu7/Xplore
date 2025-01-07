import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'


const SocialIcons = () => {
  return (
    <div className="mt-12 mb-6 flex justify-center w-full">
          {/* <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaDiscord />
          </a> */}
          {/* <a href="#" className="text-white hover:text-gray-400 mx-2 text-xl">
            <FaLinkedin />
          </a> */}
          <a target='*' href="https://www.instagram.com/xplore.24?igsh=ZXc4NWplaDNnZmZo" className="text-white hover:text-gray-400 mx-2 text-xl">
            <FaInstagram />
          </a>
          <a target='*' href="https://whatsapp.com/channel/0029Van4hPFJ3juqHUezQ82f" className="text-white hover:text-gray-400 mx-2 text-xl">
            <FaWhatsapp />
          </a>
        </div>
  )
}

export default SocialIcons

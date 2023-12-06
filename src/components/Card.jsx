import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Card = () => {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 overflow-hidden text-white px-7 py-10'>
    <FaRegFileAlt />
    <p className='text-sm mt-5 leading-tight font-semibold' 
    >Free from the veil: Your Life is like a game and you are in a concious dream.</p>
    <div className='footer absolute bottom-0 w-full   left-0'>
        <div className='flex items-center mb-5 py-3 px-8 justify-between '>
            <h5>.5mb</h5>
            <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
            <PiDownloadSimpleBold size=".9em" />
            </span>
        </div>
        <div className='flex items-center justify-center tag w-full py-4 bg-green-600 '>
            <h3 className='text-sm font-semibold'>Download Now</h3>
        </div>
    </div>
    </div>

  )
}

export default Card
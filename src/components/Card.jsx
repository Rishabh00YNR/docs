import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { CgCloseO } from "react-icons/cg";
import { motion } from "framer-motion"

function Card({data }){
  return (
    <motion.div drag whileDrag={{scale: 1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 overflow-hidden text-white px-7 py-10'>
    <FaRegFileAlt />
    <p className='text-sm mt-5 leading-tight font-semibold' 
    >{data.desc}</p>
    <div className='footer absolute bottom-0 w-full   left-0'>
        <div className='flex items-center mb-5 py-3 px-8 justify-between '>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
            {data.close ? <CgCloseO /> : <PiDownloadSimpleBold size=".9em" />}
            
            </span>
        </div>
         {
          data.tag.isOpen && (
            <div className={`flex items-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} justify-center tag w-full py-4 `}>
               <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          ) 
         }

        
    </div>
    </motion.div>

  )
}

export default Card
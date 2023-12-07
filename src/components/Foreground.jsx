import React, {useState} from 'react'
import Card from './Card'

function Foreground () {

 

  const data = [
    {
    desc:"Break the veil: Your Life is like a game which is a concious dream.",
    filesize: "1.2MB",
    close: true ,
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "Black"},
  },
  {
    desc:"The world is a simulation. A simulation of your thoughts.",
    filesize: ".3MB",
    close: true ,
    tag: {isOpen: true, tagTitle: "TAG 2", tagColor: "blue"},
  },
  {
    desc:"All these memories are in a single membrane as if in a sack that you carry which in turn encumbres you.",
    filesize: ".2MB",
    close: true ,
    tag: {isOpen: true, tagTitle: "Tag 3", tagColor: "Black"},
  },
 ];
  return (
    <div  className= 'fixed top-0 left-0 z-[3] w-full h-full flex gap-7 p-5 flex-wrap'>
     {data.map((item, index)=>(
      <Card data={item} />
     ))}
    </div>
  )
}

export default Foreground
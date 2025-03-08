import React from 'react'
import button from "../assets/button.png"
const OldButton = ({text}) => {
  return (
    <div className=' w-[240px] h-[60px] bg-cover bg-center flex items-center justify-center cursor-pointer' style={{ backgroundImage: `url(${button})` }}>
      <button className="text-[32px] font-extrabold text-[#362511] cursor-pointer" >{text}</button>
    </div>
  )
}

export default OldButton
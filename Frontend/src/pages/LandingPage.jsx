import React from 'react'
import OldButton from '../Components/OldButton'

const LandingPage = () => {
  return (
    <div className=' w-screen overflow-hidden flex items-center justify-center mt-[120px]'>
        <div>
          <div className='text-[#362511] text-[180px] font-bold leading-[220px]'>CHESSIFY</div>
          <div className='text-[#855b2a] text-center text-xl font-bold'>"Join our online chess community to play, learn, and improve. <br/>Play against friends, AI, or players worldwide!"</div>
          <div className='flex items-center justify-center mt-[30px]'><OldButton text={"Play Now"} /></div>
        </div>
    </div>
  )
}

export default LandingPage
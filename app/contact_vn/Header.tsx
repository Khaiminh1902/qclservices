import React from 'react'

const Header = () => {
  return (
    <h1 className="mt-[40px] flex items-center justify-center font-bold text-[30px] text-[#d8a339]">
        <span className="flex-1 border-t-2 border-[#d8a339] ml-10 mr-3" style={{ 
          background: 'linear-gradient(to right, rgba(216, 163, 57, 0.5), rgba(216, 163, 57, 0))' 
        }}></span>
        <span>CONTACT</span>
        <span className="flex-1 border-t-2 border-[#d8a339] mr-10 ml-3" style={{ 
          background: 'linear-gradient(to left, rgba(216, 163, 57, 0.5), rgba(216, 163, 57, 0))' 
        }}></span>
      </h1>
  )
}

export default Header
import React from 'react'
import logo from "../assets/logo.svg"
import profile from "../assets/profile.png"

export const Navbar = () => {
  return (
    <div className='max-padd-container flexBetween py-2'>
        <img src={logo} alt="logoImg" height={155} width={155}/>
        <img src={profile} alt="profileImg" height={46} width={46} className='rounded-full'/>
    </div>
  )
}

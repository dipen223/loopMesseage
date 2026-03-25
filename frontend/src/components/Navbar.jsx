import React from 'react'
import { Search } from 'lucide-react';
import profile from '../assets/profile.png';
const Navbar = () => {
  return (
    <div className='navigation-bar'>
        <div className='logo-container'>
            <img src={profile}></img>
            <h2>Loop</h2>
        </div>
        <div className='search-container'>
          <Search size={20}/>
            
        </div>
    </div>
  )
}

export default Navbar;
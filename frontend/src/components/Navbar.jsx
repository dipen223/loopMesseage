import React, { useState } from 'react'
import { Search } from 'lucide-react';
import profile from '../assets/profile.png';

import { Input } from "@/components/ui/input";
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className='navigation-bar sticky top-0'>
      <div className='logo-container'>
        <img src={profile}></img>
        <h2>Loop</h2>
      </div>
      <div className='search-container'>
        {isClick && <Input
          type="search"
          placeholder="Search your friends..."
          className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />}
        <button onClick={() => setIsClick(!isClick)}>
          <Search size={20} />
        </button>


      </div>
    </div>
  )
}

export default Navbar;
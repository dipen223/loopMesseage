import { useState } from 'react';
import Navbar from './components/Navbar';
import ChatFilter from './components/chatFilter';

import './App.css';


function App() {


  return (
    <>
    <div className='app-container'>
    <Navbar />
    <ChatFilter/> 
    </div>
  
    </>
  )
}

export default App

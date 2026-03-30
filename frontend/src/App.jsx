import { useState } from 'react';
import Navbar from './components/Navbar';
import ChatFilter from './components/chatFilter';
import ChatComponent from './components/chatComponent';
import ChatFooter from './components/chatFooter';

import './App.css';


function App() {


  return (
    <>
    <div className='app-container'>
    <Navbar />
    <ChatFilter/> 
    <ChatComponent/>
    <ChatFooter/>
    </div>
  
    </>
  )
}

export default App

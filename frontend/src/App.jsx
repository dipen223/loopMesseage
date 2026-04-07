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
        <div className='app-main'>
          <div className='app-content'>
            <ChatFilter />
            <ChatComponent />
          </div>
        </div>
        <ChatFooter />
      </div>
    </>
  )
}

export default App

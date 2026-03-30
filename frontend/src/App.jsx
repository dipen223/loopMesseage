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
        <div className='flex flex-col items-center w-full'>
          <div className='flex flex-col w-full max-w-lg'>
            <ChatFilter />
            <ChatComponent />
          </div>
        </div>
      </div>

      <ChatFooter />


    </>
  )
}

export default App

import React from 'react';
import apekshya from '../assets/apekshya.jpg';
import avyas from '../assets/avyas.png';
import dipen from '../assets/dipen.jpg';
import rohanS from '../assets/rohanS.jpg';
import rohan from '../assets/rohan.jpg';
import { Dot } from 'lucide-react';
import {Clock,Check,CheckCheck} from 'lucide-react';
const chatData = [
    {
        profile:dipen,
        name:'Dipen Bhandari',
        message:'I want to buy a Ferrari.',
        time:'10:42 AM',
        status:'new'
    },
    {
        profile:rohanS,
        name:'Rohan Shrestha',
        message:'Hey Dipen,Can u buy that chocolate for me ?',
        time:'9:15 AM',
        status:'seen'
    },
    {
        profile:avyas,
        name:'Avyas Paudel',
        message:'I am a big dawg man.',
        time:'10:42 AM',
        status:'sent'
    },
    {
        profile:rohan,
        name:'Rohan Niraula',
        message:'I drive one and only Mustang.',
        time:'8:12 PM',
        status:'delivered'
    },
    {
        profile:apekshya,
        name:'Apekshya Nepal',
        message:'Hey,can u schedule the meeting for tomorrow at 12:32PM?',
        time:'8:22 AM',
        status:'new'
    },
    {
        profile:apekshya,
        name:'Apekshya Nepal',
        message:'Hey,can u schedule the meeting for tomorrow at 12:32PM?',
        time:'8:22 AM',
        status:'new'
    },
]
const statusIcon = {
  new: <span className='status-dot' />,
  sent: <Check size={16} />,
  delivered: <Check size={16} />,
  seen: <CheckCheck size={16} />,
};

const chatComponent = () => {
  return (
    <div className='chatComponent'>
        {chatData.map((chat,index) => (
            <div className='chat-profile'>
                <div className='imgTextContainer'>
                <div className='chatImgContainer'>  
                    <img src={chat.profile}></img>
                </div>
                <div>
                    <h3>{chat.name}</h3>
                    <p>{chat.message}</p>
                </div>
                </div>
                <div className='chatStats'>
                    <span className={`${statusIcon[chat.status]}` ? `color-blue`:""}>{chat.time}</span>
                    <span>{statusIcon[chat.status]}</span>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default chatComponent;
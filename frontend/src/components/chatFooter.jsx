import {React,useState} from 'react';
import { MessageCircle,User,Settings } from 'lucide-react';

const footerItems = [
  { label: 'Chats', icon: <MessageCircle size={25} /> },
  { label: 'Contacts', icon: <User size={25} /> },
  { label: 'Settings', icon: <Settings size={25} /> },
];



const chatFooter = () => {
     const [selectedFooter,setSelectedFooter] = useState('Chats');
  return (
    <div className='chatFooter'>
          {footerItems.map((item, index) => (
        <div
          key={index}
          className={`footer-item ${item.label === selectedFooter ? 'active' : ''}`}
          onClick={() => setSelectedFooter(item.label)}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
        


    </div>
  )
}

export default chatFooter;
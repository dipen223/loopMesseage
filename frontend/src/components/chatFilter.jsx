import React,{useState} from 'react'

const chatFilter = () => {
    const filters =['All Chats','Unread','Groups','Personal'];
    const [selectedFilter,setSelectedFilter] = useState('All Chats');

  return (
    <div className='filter-container'>
        {filters.map((filter,index) =>(
            <button className={`filter-item ${filter === selectedFilter ? 'active':''}`} key={index} onClick={ () => setSelectedFilter(filter)}>
                {filter}
            </button>
        ))}
    </div>
  )     
}

export default chatFilter;
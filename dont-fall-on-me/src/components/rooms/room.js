import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdPageview, MdLibraryAdd } from 'react-icons/md';
import { UserContext } from '../../context/global/userState';

import '../../styles/rooms/room.css';

const Room = ({ room }) => {
    const { globalUser, updateUnit, updateRoom } = useContext(UserContext);
    const navigate = useNavigate();

    const viewData = () => {
        alert('view data');
    }
    const addData = () => {
        updateRoom(room);
        navigate('/record');
    }

  return (
      <>
        <div className='room-container'>
            <span className='room-name'>{room.name}</span>
            <span className='room-qs-data'>
                <span className='room-qs-data-item' onClick={viewData}>
                    <MdPageview size='24px'/>
                </span>
                <span className='room-qs-data-item' onClick={addData}>
                    <MdLibraryAdd size='24px' />
                </span>
            </span>
        </div>
      </>
  )
}

export default Room
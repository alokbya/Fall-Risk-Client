import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/global/userState';
import { useCookies } from 'react-cookie';
import EpicAuditStepper from './epicAuditStepper';
import RoomAuditStepper from './roomAuditStepper';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import '../../styles/audit/auditStepper.css';

const AuditStepper = () => {
    const { globalUser, loginUser, logoutUser, updateUnit, updateAuditType } = useContext(UserContext);
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
    const [ rooms, setRooms ] = useState([]);
    const navigate = useNavigate();

    const getRooms = async () => {
        const roomRequest = {
            unit: globalUser.unit._id,
        }
        const response = await fetch('http://localhost:3001/rooms/unit', {
            method: 'POST',
            body: JSON.stringify(roomRequest),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': cookies['session']
            },
        });

        if (response.status === 200) {
            const rooms = await response.json();
            setRooms(rooms);
        }
        else if (response.status === 500) {
            alert('no rooms found');
        }
    }

    useEffect(() => {
        getRooms();
    }, [])

  return (
      <>
        <div className='audit-stepper'>
            { globalUser.auditType === 'room' ? <RoomAuditStepper rooms={rooms} /> : '' }
            { globalUser.auditType === 'epic' ? <EpicAuditStepper rooms={rooms} /> : '' }
        </div>
      </>
  )
}

export default AuditStepper
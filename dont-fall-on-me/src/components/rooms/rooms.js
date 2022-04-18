import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/global/userState';
import { useCookies } from 'react-cookie';
import Room from './room';

const Rooms = () => {
    const [ rooms, setRooms ] = useState([]);
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
    const { globalUser } = useContext(UserContext);
    
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
    }, []);
    return (
        <>
        {JSON.stringify(globalUser)}
            {rooms.length === 0 ? 'empty' : rooms.map(room => <Room room={room} />)}
        </>
    );
}

export default Rooms
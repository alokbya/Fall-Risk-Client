import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import '../../styles/audit/epicAuditRoom.css';
import { ProgressBar } from 'react-bootstrap';

const RoomAuditRoom = ({ unitName, globalRoomData, setGlobalRoomData, room, rooms, roomCounter, incrementRoom, decrementRoom }) => {
  
    const [ fallRiskAssessed, setFallRiskAssessed ] = useState({});
    const [ localRoomData, setLocalRoomData ] = useState({});
    const [ roomChangedForward, setRoomChangedForward ] = useState(false);
    const [ questionCounter, setQuestionCounter ] = useState(0);

    return (
        <>
        </>
    );
}

export default RoomAuditRoom
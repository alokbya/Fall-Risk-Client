import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/global/userState';
import EpicAuditRooms from './epicAuditRooms';
import '../../styles/audit/epicAuditStepper.css';

const EpicAuditStepper = ({ rooms }) => {

    const { globalUser, loginUser, logoutUser, updateUnit, updateAuditType } = useContext(UserContext);
    
    const [ roomCounter, setRoomCounter ] = useState(0);

    const incrementRoomCounter = () => {
        setRoomCounter(roomCounter >= rooms.length - 1 ? roomCounter : roomCounter + 1);
    }

    const decrementRoomCounter = () => {
        setRoomCounter(roomCounter <= 0 ? roomCounter : roomCounter - 1);
    }

    const pages = [
      'name',
      'fallRiskAssessed',
      'lasDocumentedFallRiskAssessment',
      'patientFamilyEducated'
    ];

    useEffect(() => {
        
    }, [rooms]);

    return (
        <>
            <EpicAuditRooms rooms={rooms} />
        </>
    )
}

export default EpicAuditStepper
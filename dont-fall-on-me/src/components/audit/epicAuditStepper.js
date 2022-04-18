import React, { useContext, useState, useEffect } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/global/userState';

import '../../styles/audit/epicAuditStepper.css';
import EpicAuditRooms from './epicAuditRooms';

const EpicAuditStepper = ({ rooms }) => {
    const navigate = useNavigate();
    const { globalUser, loginUser, logoutUser, updateUnit, updateAuditType } = useContext(UserContext);
    
    const [ roomCounter, setRoomCounter ] = useState(0);
    const [ roomTracker, setRoomTracker ] = useState({});

    const [ currentPage, setCurrentPage ] = useState(0);

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
    ]

    const returnHome = () => {
        updateUnit('');
        updateAuditType('');
        navigate('/');
      }

    const saveAuditProgress = () => {
        alert('save progress');
    }

    useEffect(() => {
        
    }, [rooms]);

    return (
        <>
            <h2>Epic Audit Stepper</h2>
            <EpicAuditRooms rooms={rooms} />
            <button className='save-audit' onClick={saveAuditProgress}>Save</button>
        </>
    )
}

export default EpicAuditStepper
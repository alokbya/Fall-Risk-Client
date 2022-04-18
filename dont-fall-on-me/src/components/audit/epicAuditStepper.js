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
            {/* <p>rooms: {rooms.length}</p>
            <p>room counter: {roomCounter}</p>
            <p>tracker: {JSON.stringify(roomTracker)}</p>
            <div className='stepper-buttons'>
                <button onClick={decrementRoomCounter}>Previous</button>
                <button onClick={incrementRoomCounter}>Next</button>
            </div> */}
            <button className='save-audit' onClick={saveAuditProgress}>Save</button>
            {/* <span className='back return-home' onClick={returnHome}>
                <MdKeyboardBackspace size='30px' />
                <span className='room-name'>
                    {globalUser.room.name}
                </span>
            </span> */}
        </>
    )
}

export default EpicAuditStepper
import React, { useState, useEffect } from 'react'
import FallRiskAssessed from './epicAuditPages/fallRiskAssessed';
import LastDocumentedFallRiskAssessment from './epicAuditPages/lastDocumentedFallRiskAssessment';
import PatientFamilyEducated from './epicAuditPages/patientFamilyEducated';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import '../../styles/audit/epicAuditRoom.css';
import { ProgressBar } from 'react-bootstrap';

const EpicAuditRoom = ({ unitName, globalRoomData, setGlobalRoomData, room, rooms, roomCounter, incrementRoom, decrementRoom }) => {
  
    const [ fallRiskAssessed, setFallRiskAssessed ] = useState({});
    const [ localRoomData, setLocalRoomData ] = useState({});
    const [ roomChangedForward, setRoomChangedForward ] = useState(false);
    const [ questionCounter, setQuestionCounter ] = useState(0);

    /*
        * Add localRoomData to globalRoomData, and replace data if already exists
    */
    const updateGlobalRoomData = () => {
        if (roomExistsInGlobal(localRoomData.id)) {
            const remainingRooms = globalRoomData.filter(f => f.id !== localRoomData.id);
            setGlobalRoomData([...remainingRooms, localRoomData]);
        } else {
            setGlobalRoomData([...globalRoomData, localRoomData]);
        }
    }

    /*
        * Pull out localRoomData from globalRoomData list
    */
    const getLocalRoomOrStartNewRoom = (room) => {
        if (roomExistsInGlobal(room._id)) {
            const roomInGlobal = globalRoomData.filter(r => r.id === room._id);
            setLocalRoomData(...roomInGlobal);
        } else {
            setLocalRoomData({id: room._id, name: room.name});
        }
    }

    /*
        * Determine if localRoomData for room already exists in globalRoomData
    */
    const roomExistsInGlobal = (roomId) => {
        const globalRoomToReplace = globalRoomData.filter(r => r.id === roomId);
        return globalRoomToReplace.length > 0;
    }

    /*
        * Determine if room in localRoomData is complete and can be added to globalRoomData
    */
    const isRoomComplete = (room) => {
        const result = room.id !== undefined &&
        room.name !== undefined &&
        room.fallRiskAssessed !== undefined &&
        room.dateAssessed !== undefined &&
        room.timeAssessed !== undefined &&
        room.lastDoc !== undefined &&
        room.patientFamilyEducated !== undefined;
        return result;
    }

    /*
        * Skip current room
    */
    const skipQuestion = () => {
        startNextRoom();
        setQuestionCounter(0);
    }

    /*
        * Process data and go to the next room (forward)
    */
    const startNextRoom = () => {
        const complete = isRoomComplete(localRoomData);
        if (complete) {
            updateGlobalRoomData();
        }
        incrementRoom();
        getLocalRoomOrStartNewRoom(rooms[roomCounter + 1]);
    }

    // increment question
    // if user is on the last question
    // check if there are other rooms to go through
    // if not, the user can no longer increment questions and rooms
    const incrementQuestionCounter = () => {
        if (questionCounter >= 2) {
            if (roomCounter === rooms.length - 1) {
                if (isRoomComplete(localRoomData)) updateGlobalRoomData();
            } else { // rooms in the middle (not last)
                startNextRoom();
                setQuestionCounter(0);
            }
        } else {
            setQuestionCounter(questionCounter + 1);
        }
    }

    // decrement questions
    // if the user is on the first question
    // check if there are rooms "before" this room
    // if not, the user can no longer decrement through questions and rooms
    const decrementQuestionCounter = () => {
        if (questionCounter <= 0) {
            if (roomCounter === 0) {
                setQuestionCounter(0);
            } else {
                getLocalRoomOrStartNewRoom(rooms[roomCounter - 1]);
                setQuestionCounter(2);
                decrementRoom();
            }
        } else {
            setQuestionCounter(questionCounter - 1);
        }
    }

    const saveAudit = () => {
        alert(JSON.stringify(globalRoomData));
    }

    useEffect(() => {
        setLocalRoomData({...localRoomData, id: room._id, name: room.name});
        setRoomChangedForward(false);
    }, [globalRoomData, roomChangedForward])

    return (
      <>
      {Object.keys(localRoomData).length > 0 ? `LOCAL: ${JSON.stringify(localRoomData)}` : ''}
      <br></br>
      <ProgressBar variant={'success'} label={`Room ${roomCounter + 1}`} now={((roomCounter + 1) / rooms.length) * 100} />
      <ProgressBar variant={'info'} label={`Question ${questionCounter + 1}`} now={((questionCounter + 1) / 3) * 100} />
        <div className='audit-room'>
            <div className='unit-name'>
                {unitName}
            </div>
            <div className='room-name'>
                {room.name}
            </div>
            <br></br>
            <div className='audit-questions'>
                { questionCounter === 0 ? <FallRiskAssessed localRoomData={localRoomData} setLocalRoomData={setLocalRoomData} /> : '' }
                { questionCounter === 1 ? <LastDocumentedFallRiskAssessment localRoomData={localRoomData} setLocalRoomData={setLocalRoomData} /> : '' }
                { questionCounter === 2 ? <PatientFamilyEducated localRoomData={localRoomData} setLocalRoomData={setLocalRoomData} /> : '' }
            </div>
            <footer className='stepper-vital-buttons'>
                <div className='question-stepper-buttons counter-buttons'>
                    <button className='decrement-question' onClick={decrementQuestionCounter}><MdOutlineKeyboardArrowLeft />Previous</button>
                    <div className='progress-bars'>
                        
                    </div>
                    <button onClick={skipQuestion}>Skip</button>
                    <button className='increment-question' onClick={incrementQuestionCounter}>Next <MdOutlineKeyboardArrowRight /></button>
                </div>
                <button id='save-audit-btn' className='save-audit' onClick={saveAudit}>Save</button>
            </footer>
        </div>
      </>
  )
}

export default EpicAuditRoom
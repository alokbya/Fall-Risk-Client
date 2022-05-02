import React, { useState, useEffect } from 'react'
import QuestionName from './auditPages/questionName';
import FallRiskAssessed from './epicAuditPages/fallRiskAssessed';
import LastDocumentedFallRiskAssessment from './epicAuditPages/lastDocumentedFallRiskAssessment';
import PatientFamilyEducated from './epicAuditPages/patientFamilyEducated';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import '../../styles/audit/epicAuditRoom.css';
import { ProgressBar } from 'react-bootstrap';

const EpicAuditRoom = ({ unitName, globalRoomData, setGlobalRoomData, room, rooms, roomCounter, incrementRoom, decrementRoom, setRoomsTracker, roomsTracker }) => {
  
    const [ fallRiskAssessed, setFallRiskAssessed ] = useState({});
    const [ localRoomData, setLocalRoomData ] = useState({});
    const [ roomChanged, setRoomChanged ] = useState(false);
    const [ roomChangedForward, setRoomChangedForward ] = useState(false);
    const [ questionCounter, setQuestionCounter ] = useState(0);

    const updateGlobalRoomData = (localRoomData) => {
        const remainingRooms = globalRoomData.filter(f => f.id !== localRoomData.id);
        setGlobalRoomData([...remainingRooms, localRoomData]);
    }


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

    // increment question
    // if user is on the last question
    // check if there are other rooms to go through
    // if not, the user can no longer increment questions and rooms
    const incrementQuestionCounter = () => {
        if (questionCounter >= 2) {
            if (roomCounter === rooms.length - 1) {
                setQuestionCounter(2);
                if (isRoomComplete(localRoomData)) {
                    updateGlobalRoomData(localRoomData);
                }
            } else {
                let currentRoomComplete = isRoomComplete(localRoomData);
                if (currentRoomComplete) {
                    let globalRoomToReplace = globalRoomData.filter(r => r.id === localRoomData.id);
                    if (globalRoomToReplace.length > 0) {
                        updateGlobalRoomData(localRoomData);
                    } else {
                        setGlobalRoomData([...globalRoomData, localRoomData]);
                    }
                        incrementRoom();
                        let newRoomInGlobal = globalRoomData.filter(r => r.id === room._id);
                        if (newRoomInGlobal.length > 0) {
                            setLocalRoomData(...newRoomInGlobal);
                        } else {
                            setLocalRoomData({id: room._id, name: room.name});
                        }
                }
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
                let existingPreviousRoom = globalRoomData.filter(f => f.id === rooms[roomCounter - 1]._id);
                let existingCurrentRoom = globalRoomData.filter(f => f.id === room._id);
                let currentRoomIsComplete = isRoomComplete(localRoomData);
                if (currentRoomIsComplete) { // update global current room with local room
                    updateGlobalRoomData(localRoomData);
                }
                if (isRoomComplete(...existingPreviousRoom)) {
                    setLocalRoomData(...existingPreviousRoom);
                } else {
                    setLocalRoomData({id: room._id, name: room.name});
                }
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
                { questionCounter === 0 ? <FallRiskAssessed localRoomData={localRoomData} setLocalRoomData={setLocalRoomData} globalRoomData={globalRoomData} setGlobalRoomData={setGlobalRoomData} room={room} fallRiskAssessed={fallRiskAssessed} setFallRiskAssessed={setFallRiskAssessed} /> : '' }
                { questionCounter === 1 ? <LastDocumentedFallRiskAssessment localRoomData={localRoomData} setLocalRoomData={setLocalRoomData} globalRoomData={globalRoomData} setGlobalRoomData={setGlobalRoomData} room={room} fallRiskAssessed={fallRiskAssessed} setFallRiskAssessed={setFallRiskAssessed} /> : '' }
                { questionCounter === 2 ? <PatientFamilyEducated localRoomData={localRoomData} setLocalRoomData={setLocalRoomData} globalRoomData={globalRoomData} setGlobalRoomData={setGlobalRoomData} room={room} fallRiskAssessed={fallRiskAssessed} setFallRiskAssessed={setFallRiskAssessed} /> : '' }
            </div>
            <footer className='stepper-vital-buttons'>
                <div className='question-stepper-buttons counter-buttons'>
                    <button className='decrement-question' onClick={decrementQuestionCounter}><MdOutlineKeyboardArrowLeft />Previous</button>
                    <div className='progress-bars'>
                        
                    </div>
                    <button className='increment-question' onClick={incrementQuestionCounter}>Next <MdOutlineKeyboardArrowRight /></button>
                </div>
                <button id='save-audit-btn' className='save-audit' onClick={saveAudit}>Save</button>
            </footer>
        </div>
      </>
  )
}

export default EpicAuditRoom
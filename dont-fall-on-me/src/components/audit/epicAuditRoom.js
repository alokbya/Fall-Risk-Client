import React, { useState, useEffect } from 'react'
import QuestionName from './auditPages/questionName';
import FallRiskAssessed from './epicAuditPages/fallRiskAssessed';
import LastDocumentedFallRiskAssessment from './epicAuditPages/lastDocumentedFallRiskAssessment';
import PatientFamilyEducated from './epicAuditPages/patientFamilyEducated';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import '../../styles/audit/epicAuditRoom.css';

const EpicAuditRoom = ({ room, incrementRoom, decrementRoom, setRoomsTracker, roomsTracker }) => {
  
    const [ name, setName ] = useState('');
    const [ fallRiskAssessed, setFallRiskAssessed ] = useState({});
    const [ lasDocumentedFallRiskAssessment, setLasDocumentedFallRiskAssessment ] = useState({})
    const [ patientFamilyEducated, setPatientFamilyEducated ] = useState(false);

    const [ questionCounter, setQuestionCounter ] = useState(0);

    const incrementQuestionCounter = () => {
        // if (questionCounter === 3) { incrementRoom(); }
        setQuestionCounter(questionCounter >= 3 ? questionCounter : questionCounter + 1);
    }

    const decrementQuestionCounter = () => {
        // if (questionCounter === 0) { decrementRoom(); }
        setQuestionCounter(questionCounter <= 0 ? questionCounter : questionCounter - 1);
    }

    return (
      <>
        <div className='audit-room'>
            <span className='room-name'>
                {room.name}
            </span>
            <div className='audit-questions'>
                { questionCounter === 0 ? <QuestionName name={name} setName={setName} /> : '' }
                { questionCounter === 1 ? <FallRiskAssessed fallRiskAssessed={fallRiskAssessed} setFallRiskAssessed={setFallRiskAssessed} /> : '' }
                { questionCounter === 2 ? <LastDocumentedFallRiskAssessment fallRiskAssessed={fallRiskAssessed} setFallRiskAssessed={setFallRiskAssessed} /> : '' }
                { questionCounter === 3 ? <PatientFamilyEducated fallRiskAssessed={fallRiskAssessed} setFallRiskAssessed={setFallRiskAssessed} /> : '' }
            </div>
            {/* <p>Question counter: {questionCounter}</p> */}
            <div className='question-stepper-buttons counter-buttons'>
                <button className='decrement-question' onClick={decrementQuestionCounter}><MdOutlineKeyboardArrowLeft />Previous</button>
                <button className='increment-question' onClick={incrementQuestionCounter}>Next <MdOutlineKeyboardArrowRight /></button>
            </div>
        </div>
        <div>
            {/* <p>Name: {name}</p>
            <p>Fall Risk Assessed: {JSON.stringify(fallRiskAssessed)}</p> */}
        </div>
      </>
  )
}

export default EpicAuditRoom
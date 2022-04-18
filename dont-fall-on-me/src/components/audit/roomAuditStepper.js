import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MdKeyboardBackspace } from 'react-icons/md';
import { UserContext } from '../../context/global/userState';

import QuestionName from './auditPages/questionName';
import FallRiskAssessed from './epicAuditPages/fallRiskAssessed';

import '../../styles/audit/auditStepper.css';

const RoomAuditStepper = () => {
  const navigate = useNavigate();
  const { globalUser, loginUser, logoutUser, updateUnit } = useContext(UserContext);

  const [ name, setName ] = useState('');
  const [ room, setRoom ] = useState(-1);
  const [ fallRiskAssessed, setFallRiskAssessed ] = useState({});
  const [ lasDocumentedFallRiskAssessment, setLasDocumentedFallRiskAssessment ] = useState({})
  const [ patientFamilyEducated, setPatientFamilyEducated ] = useState(false);
  const [ doorJamMarker, setDoorJamMarker ] = useState(false);
  const [ whiteboardAdjusted, setWhiteboardAdjusted ] = useState(false);
  const [ yellowSocksOrShoes, setYellowSocksOrShoes ] = useState(false);
  const [ threeSideRails, setThreeSideRails ] = useState(false);
  const [ chairAlarmOnZeroSeconds, setChairAlarmOnZeroSeconds ] = useState(false);
  const [ threeCordsForChairAlarm, setThreeCordsForChairAlarm ] = useState(false);
  const [ bedAlarm, setBedAlarm ] = useState(false);

  const [ currentPage, setCurrentPage ] = useState(0);

  const pages = [
    'name',
    'fallRiskAssessed',
    'lasDocumentedFallRiskAssessment',
    'patientFamilyEducated',
    'doorJamMarker',
    'whiteboardAdjusted',
    'yellowSocksOrShoes',
    'threeSideRails',
    'chairAlarmOnZeroSeconds',
    'threeCordsForChairAlarm',
    'bedAlarm'
  ]

  const returnHome = () => {
    navigate('/unit');
  }

  useEffect(() => {
    setRoom(globalUser.room._id);
  }, [])
  return (
      <>
      <h2> Room stepper</h2>
        <div className='stepper-container'>
          <span className='back return-home' onClick={returnHome}>
            <MdKeyboardBackspace size='30px' />
            <span className='room-name'>
              {globalUser.room.name}
            </span>
          </span>
          <ProgressBar className='stepper-progress' animated now={currentPage / 10 * 100} label={`${currentPage / 10 * 100}%`}/>
          <span className='questions'>
            { currentPage === 0 ? <QuestionName name={name} setName={setName}/> : '' }
            { currentPage === 1 ? <FallRiskAssessed fallRiskAssessed={fallRiskAssessed} setFallRiskAssessed={setFallRiskAssessed}/> : ''}
          </span>
          <span className='stepper-btns'>
            <button className='prev-step stepper-button' onClick={() => (setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage))}>Previous {currentPage}</button>
            <button className='next-step stepper-button' onClick={() => (setCurrentPage(currentPage < 10 ? currentPage + 1 : currentPage))}>Next {currentPage}</button>
          </span>
        </div>
        <div>
          <p> </p>
          <p>name: {name} </p>
          <p>room: {room} </p>
          <p>fall risk assessed: {JSON.stringify(fallRiskAssessed)} </p>
        </div>
      </>
  )
}

export default RoomAuditStepper
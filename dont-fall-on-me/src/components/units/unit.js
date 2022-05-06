import React, { useState, useContext } from 'react'
import { MdOpenInFull } from 'react-icons/md';
import '../../styles/units/unit.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/global/userState';

const Unit = ({ unit }) => {
  const { globalUser, loginUser, logoutUser, updateUnit, updateAuditType } = useContext(UserContext);
  const [ viewControls, setViewControls ] = useState(false)
  const navigate = useNavigate();
  const expandUnit = () => {
    setViewControls(!viewControls);
    updateUnit(unit);
    // navigate('/unit');
  }

  const performEpicAudit = () => {
    updateUnit(unit);
    updateAuditType('epic');
    navigate('/record');
  }

  const performRoomAudit = () => {
    updateUnit(unit);
    updateAuditType('room');
    navigate('/record');
  }

  const viewUnitData = () => {
    updateUnit(unit);
    alert('view unit data');
  }

  return (
    <>
      <div className='unit unit-container'>
          <div className='unit-header'>
            <span className="expand-unit" onClick={expandUnit}><MdOpenInFull size="24px"/></span>
            <span className='unit-name'>{unit.name}</span>
            
          </div>
          {/* <span className='unit-id'>{unit._id}</span> */}
          {viewControls ? <div className='unit-controls'>
            <button className='unit-control epic-audit' onClick={performEpicAudit}>Epic Audit</button>
            <button className='unit-control room-audit' onClick={performRoomAudit}>Room Audit</button>
            <button className='unit-control view-data'>View Data</button>
          </div> : ''}
      </div>
    </>
  );
}

export default Unit
import React, { useState, useEffect, useContext } from 'react'

import '../../styles/audit/epicAuditStepper.css';
import RoomAuditRooms from './roomAuditRooms';

const RoomAuditStepper = ({ rooms }) => {

  useEffect(() => {

  }, [rooms])
  return (
      <>
        <RoomAuditRooms rooms={rooms} />
      </>
  )
}

export default RoomAuditStepper
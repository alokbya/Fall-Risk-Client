import React, { useContext, useState, useEffect } from 'react'
import EpicAuditRooms from './epicAuditRooms';
import '../../styles/audit/epicAuditStepper.css';

const EpicAuditStepper = ({ rooms }) => {

    useEffect(() => {
        
    }, [rooms]);

    return (
        <>
            <EpicAuditRooms rooms={rooms} />
        </>
    )
}

export default EpicAuditStepper
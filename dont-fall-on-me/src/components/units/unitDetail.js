import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../context/global/userState';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import Rooms from '../rooms/rooms';

import '../../styles/units/unitDetail.css'

const UnitDetail = () => {
    const { globalUser } = useContext(UserContext);
    
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <span className='back return-home' onClick={returnHome}>
                <MdKeyboardBackspace size='30px' />
            </span>
            <div className='unit-detail'>
                <div className='unit-detail-name'>
                    {globalUser.unit.name}
                </div>
                <div className='unit-detail-date-created'>
                    {globalUser.unit.dateCreated}
                </div>
                <Rooms />
            </div>
        </>
    )
}

export default UnitDetail
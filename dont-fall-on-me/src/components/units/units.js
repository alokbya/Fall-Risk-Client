import React, { useEffect, useContext, useState } from 'react'
import { useCookies } from 'react-cookie';
import { UserContext } from '../../context/global/userState';
import Unit from './unit';
import Search from '../search/search';
import { useNavigate } from 'react-router-dom';

import '../../styles/units/units.css';
import JoinUnit from './joinUnit';

const Units = ({ refresh, units, setUnits }) => {
    const { globalUser, updateUser } = useContext(UserContext);
    // const [ units, setUnits ] = useState([]);
    
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
    const [ filteredUnits, setFilteredUnits ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ joinUnit, setJoinUnit] = useState(false);
    const [ joinUnitId, setJoinUnitId ] = useState('');
    const [ orgUnits, setOrgUnits ] = useState([])
    const [ joinUnitSearchQuery, setJoinUnitSearchQuery ] = useState('');

    const navigate = useNavigate();
    const toggleJoinUnit = () => {
        setJoinUnit(!joinUnit);
    }
    const getUserUnits = async () => {
        const response = await fetch(`http://localhost:3001/units/${globalUser.user.user_id}`, {
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            'Session-Token': cookies['session']
            }
        });
        if (response.status === 200) {
            const units = await response.json();
            // setUnits(units);
            const currentUser = globalUser.user;
            // let newUnits = [...currentUser.units, ...units];
            let newUnits = [...units];
            newUnits = [...new Map(newUnits.map(u => [u._id, u])).values()]; // ensure unique values
            const updatedUser = {...currentUser, units: newUnits};
            updateUser(updatedUser);
            setUnits(newUnits);
            setFilteredUnits(newUnits);
        }
    }

    const getUnits = async () => {
        const response = await fetch('http://localhost:3001/units', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': cookies['session']
            }
        });
            if (response.status === 200) {
                const allUnits = await response.json();
                setOrgUnits(allUnits);
                // alert(JSON.stringify(orgUnits));
            }
    }

    useEffect(() => {
        getUserUnits();
        getUnits();
    }, []);

        return (
        <>
            <button className='join-unit-toggle' onClick={toggleJoinUnit}>Join Unit</button>
            {joinUnit ? <JoinUnit refresh={refresh} getUserUnits={getUserUnits} joinUnitSearchQuery={joinUnitSearchQuery} setJoinUnitSearchQuery={setJoinUnitSearchQuery} className='join-unit-dropdown' orgUnits={orgUnits} setOrgUnits={setOrgUnits} joinUnitId={joinUnitId} units={units} setUnits={setUnits} setJoinUnitId={setJoinUnitId}/> : ''}
            <br></br>
            <div>
                {/* <div className='user-units'>{`${JSON.stringify(globalUser.user.first_name).replace(/"/g, '')}'s`} Units</div> */}
                <div className='user-units'>{`My`} Units</div>
            </div>
            <Search filteredUnits={filteredUnits} setFilteredUnits={setFilteredUnits} searchQuery={searchQuery} setSearchQuery={setSearchQuery} units={units}/>
            <div className='units'>
                { searchQuery.length === 0 ? (units.length === 0 ? <span className='no-units-found'>You haven't joined any units yet.</span> : units.map(unit => <Unit unit={unit}/>)) : (filteredUnits.length === 0 ? '' : filteredUnits.map(unit => <Unit unit={unit}/>)) }
                { searchQuery.length > 0 && filteredUnits.length === 0 ? <span className='no-units-found'>No units found...</span> : '' }
            </div>
        </>
    )
}

export default Units;
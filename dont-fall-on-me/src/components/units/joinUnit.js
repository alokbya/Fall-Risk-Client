import React, {useEffect, useState, useContext} from 'react'
import { useCookies } from 'react-cookie';


import '../../styles/units/joinUnit.css';
import JoinOrgUnitList from './joinOrgUnitList';
import { UserContext } from '../../context/global/userState';

const JoinUnit = ({refresh, getUserUnits, joinUnitSearchQuery, setJoinUnitSearchQuery, orgUnits, setOrgUnits, units, setUnits, joinUnitId, setJoinUnitId}) => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
    const [ filteredUnits, setFilteredUnits ] = useState([]);
    const { globalUser, updateUser, loginUser, logoutUser, updateUnit, updateAuditType } = useContext(UserContext);

    const modifyQuery = (event) => {
        setJoinUnitSearchQuery(event.target.value);
        const cleanedList = orgUnits.filter(u => u.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredUnits(cleanedList);
        if (event.target.value === '') setFilteredUnits([]);
        setJoinUnitId(event.target.value);
    }

    const joinUnit = async (unit_id) => {
        const response = await fetch(`http://localhost:3001/users/units`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                unit: unit_id,
            }),
            headers: {
            'Content-Type': 'application/json',
            'Session-Token': cookies['session']
            }
        });
        if (response.status === 200) {
            const user = await response.json();
            setUnits([...user.units]);
            const currentUser = globalUser.user;
            const updatedUser = {...currentUser, units: [...currentUser.units, ...user.units]}
            updateUser(updatedUser);
            getUserUnits();
            refresh();
        }
    }

    useEffect(() => {
        if (joinUnitSearchQuery.length === 0) {
            setFilteredUnits(orgUnits);
        }
    }, [joinUnitSearchQuery])
  return (
      <>
        <div className='join-unit-form'>
                <div className='join-unit-inputs'>
                    <input
                    type='text'
                    placeholder='search for a unit...'
                    onChange={modifyQuery}
                    value={joinUnitSearchQuery}
                    className='join-unit-input'
                    />
                    {/* <button className='join-unit-button' onClick={joinUnit}>Join</button> */}
                </div>
                <div className='join-unit-orgs'>
                    {/* { searchQuery.length === 0 ? (orgUnits.length === 0 ? <span className='no-units-found'>You haven't joined any units yet.</span> : orgUnits.map(unit => <Unit unit={unit}/>)) : (filteredUnits.length === 0 ? '' : filteredUnits.map(unit => <Unit unit={unit}/>)) } */}
                    {/* { searchQuery.length > 0 && filteredUnits.length === 0 ? <span className='no-units-found'>No units found...</span> : '' } */}
                    <JoinOrgUnitList units={units} filteredUnits={filteredUnits} joinUnit={joinUnit}/>
                </div>
        </div>
      
      </>
  )
}

export default JoinUnit
import React, { useEffect, useContext, useState } from 'react'
import { useCookies } from 'react-cookie';
import { UserContext } from '../../context/global/userState';
import Unit from './unit';
import Search from '../search/search';
import { useNavigate } from 'react-router-dom';

import '../../styles/units/units.css';

const Units = ({ units, setUnits }) => {
    const { globalUser } = useContext(UserContext);
    // const [ units, setUnits ] = useState([]);
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
    const [ filteredUnits, setFilteredUnits ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState('');
    const navigate = useNavigate();

    const getUnits = async () => {
        const response = await fetch('http://localhost:3001/units', {
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            'Session-Token': cookies['session']
            }
        });
        if (response.status === 200) {
            const units = await response.json();
            // setUnits(units);
            setUnits(units);
            setFilteredUnits(units);
        }
    }

    useEffect(() => {
        getUnits();
    }, []);

        return (
        <>
            <Search filteredUnits={filteredUnits} setFilteredUnits={setFilteredUnits} searchQuery={searchQuery} setSearchQuery={setSearchQuery} units={units}/>
            <div className='units'>
                { searchQuery.length === 0 ? (units.length === 0 ? '' : units.map(unit => <Unit unit={unit}/>)) : (filteredUnits.length === 0 ? '' : filteredUnits.map(unit => <Unit unit={unit}/>)) }
                { searchQuery.length > 0 && filteredUnits.length === 0 ? <span className='no-units-found'>No Units found...</span> : '' }
            </div>
        </>
    )
}

export default Units;
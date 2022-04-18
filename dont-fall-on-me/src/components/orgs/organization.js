import React, { useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../context/global/userState';
import { MdDelete } from 'react-icons/md';
import Units from '../units/units';
import Search from '../search/search';
import '../../styles/orgs/organization.css';

const Organization = ({ org, parentOrgs, setParentOrgs }) => {

  const { globalUser } = useContext(UserContext);
  const [ orgs, setOrgs ] = useState([]);
  const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
  const [ units, setUnits ] = useState([]);
  const [ filteredUnits, setFilteredUnits ] = useState([]);

  const deleteOrg = async () => {
    const response = await fetch('http://localhost:3001/orgs', {
      method: 'DELETE',
      body: JSON.stringify({ id: org._id }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 204) {
      setParentOrgs(parentOrgs.filter(e => e._id !== org._id));
    }
  }

  return (
    <>
    {/* {JSON.stringify(globalUser)} */}
        <div className='organization'>
            <div className='org-header-container'>
                <span className="org-name header-item">{org.name}</span>
                {/* <Search filteredUnits={filteredUnits} setFilteredUnits={setFilteredUnits} items={units}/> */}
                <Units units={units} setUnits={setUnits}/>
                {/* <span className='delete-icon header-item' onClick={deleteOrg}><MdDelete className='delete-react-icon' size="30px"/></span> */}
                {/* <span className='delete-icon header-item' onClick={deleteOrg}><MdDelete className='delete-react-icon' size="30px"/></span> */}
            </div>
        </div>
    </>
   )
}

export default Organization
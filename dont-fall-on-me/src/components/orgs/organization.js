import React, { useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../context/global/userState';
import { MdDelete } from 'react-icons/md';
import Units from '../units/units';
import Search from '../search/search';
import '../../styles/orgs/organization.css';
import { deleteOrg } from '../../httpHelpers/httpHelpers.mjs';

const Organization = ({ refresh, org, parentOrgs, setParentOrgs }) => {

  const { globalUser } = useContext(UserContext);
  const [ orgs, setOrgs ] = useState([]);
  const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
  const [ units, setUnits ] = useState([]);
  const [ filteredUnits, setFilteredUnits ] = useState([]);

  const handleDeleteOrg = async () => {
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
    {/* {JSON.stringify(org)} */}
        <div className='organization'>
            <div className='org-header-container'>
                <span className="org-name header-item">{org[0].name}</span>
                <Units refresh={refresh} units={units} setUnits={setUnits}/>
            </div>
        </div>
    </>
   )
}

export default Organization
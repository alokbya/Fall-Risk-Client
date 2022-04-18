import React, { useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../context/global/userState';
import Organization from './organization';
import OrgPopupModal from './addOrgModal';

import { MdOutlineAddCircleOutline } from 'react-icons/md';

import '../../styles/orgs/organizations.css';

const Organizations = ({userLoading}) => {

  const { globalUser } = useContext(UserContext);
  const [ orgs, setOrgs ] = useState([]);
  const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
  const [ openAdd, setOpenAdd ] = useState(false);

  let message = "";
  // get organizations related to user
  const getOrgs = async () => {
    const response = await fetch('http://localhost:3001/orgs', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Session-Token': cookies['session']
      }
    });
    if (response.status === 200) {
      const orgs = await response.json();
      setOrgs(orgs);
    }
  }

  const addOrg = () => {
    setOpenAdd(!openAdd);
    message += " test ";
    const x = openAdd;
  }

  useEffect(() => {
    getOrgs();
  }, []);
    return (
        <>
          <div className='org-banner'>
          
          </div>
          {orgs.length === 0 ? '' : orgs.map(org => <Organization key={org._id} className="organizations add-org" org={org} parentOrgs={orgs} setParentOrgs={setOrgs} />)}
            {/* <div className="organizations">
                <div className="organizations org-header">
                    <span className="organizations org-title">Organizations</span>
                    <button className='organizations add-btn' onClick={addOrg}>Add <MdOutlineAddCircleOutline size="40px"/></button>
                </div>
                {orgs.length === 0 ? '' : orgs.map(org => <Organization className="organizations add-org" org={org} parentOrgs={orgs} setParentOrgs={setOrgs} />)}
                <OrgPopupModal orgs={orgs} setOrgs={setOrgs} openAdd={openAdd} onClose={() => getOrgs && setOpenAdd(false)} />
            </div> */}
        </>
  )
}

export default Organizations
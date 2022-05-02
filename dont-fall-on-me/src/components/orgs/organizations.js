import React, { useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../context/global/userState';
import Organization from './organization';
import OrgPopupModal from './addOrgModal';

import { MdOutlineAddCircleOutline } from 'react-icons/md';

import '../../styles/orgs/organizations.css';

const Organizations = ({setNoOrg, refresh, userLoading}) => {

  const { globalUser, updateUser } = useContext(UserContext);
  const [ orgs, setOrgs ] = useState([]);
  const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
  const [ openAdd, setOpenAdd ] = useState(false);

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
      setOrgs([orgs]);
    } else if (response.status === 403) {
      setNoOrg(true);
    }
  }

  // const addOrg = () => {
  //   setOpenAdd(!openAdd);
  //   message += " test ";
  //   const x = openAdd;
  // }

  useEffect(() => {
    // if (globalUser.user.orgs === undefined) {
    //   getOrgs();
    // }
    getOrgs();
    // setOrgs(...globalUser.user.orgs);
  }, [orgs]);
    return (
        <>
          <div className='org-banner'>
          {/* {JSON.stringify(globalUser.user)} */}
          <br></br>
          {/* {`${Array.isArray(orgs)}`} */}
          </div>
          {orgs.length === 0 ? 'NO ORGS' : orgs.map(org => <Organization refresh={refresh} className="organizations add-org" org={org} parentOrgs={orgs} setParentOrgs={setOrgs} />)}
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
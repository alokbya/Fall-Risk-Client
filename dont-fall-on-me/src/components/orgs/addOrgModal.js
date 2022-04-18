import React, { useState, ReactDOM } from 'react'
import { useCookies } from 'react-cookie';
import '../../styles/orgs/addOrgModal.css';

const OrgPopupModal = ({ openAdd, onClose, orgs, setOrgs }) => {
    const [ orgName, setOrgName ] = useState('');
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);

    const submitNewOrg = async (e) => {
        e.preventDefault();
        const newOrg = {
            name: orgName,
        };
        try{
            const response = await fetch('http://localhost:3001/orgs', {
            method: 'POST',
            body: JSON.stringify(newOrg),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': cookies['session'],
                'Session': cookies['session']
            },
            });
            if (response.status === 201) {
                const response_org = await response.json();
                        setOrgs([...orgs, response_org]);
                        console.log('Added new org');
                        setOrgName('');
                        onClose();
            }
            // .then( async (response) => {
            //     if (response.status === 201) {
            //         const response_org = await response.json();
            //     }
            // })
            // .catch(error => {
            //     console.error(error);
            //     alert(error);
            // })
            } catch (error) {
                console.error(error);
                alert(error);
            }
    }
    if (!openAdd) return null;
    return (
      <>
        <div className='pop-container'>
            <div className='add-org popup-overlay'></div>
            <div className='add-org popup'>
                <form>
                    <input
                        type='text'
                        placeholder='Organization Name'
                        value={orgName}
                        onChange={e => setOrgName(e.target.value)}
                    />
                    <button type='submit' onSubmit={e => e.preventDefault} onClick={submitNewOrg}>Submit</button>
                </form>
                    <button className='exit-portal' onClick={onClose}>Close</button>
            </div>
        </div>
      </>
  )
}

export default OrgPopupModal
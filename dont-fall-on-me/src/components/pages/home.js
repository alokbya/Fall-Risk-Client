import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { BrowserRouter, Router, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/global/userState';
import Spinner from 'react-bootstrap/Spinner';
import Organizations from '../orgs/organizations';
import '../../styles/loading/spinner.css';

const Home = () => {
    const navigate = useNavigate();
    const { globalUser, loginUser, logoutUser, updateUnit, updateAuditType } = useContext(UserContext);
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);
    const [ userLoading, setUserLoading ] = useState(false);
    const [noOrg, setNoOrg] = useState(false);
    const [ loading, setLoading ] = useState(true);

    const refresh = async () => {
      setUserLoading(true);
      const response = fetch('http://localhost:3001/refresh', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': cookies['session']
            },
        })
        .then(async (response) => {
            if (response.status === 200) {
                const res_user = await response.json();
                loginUser(res_user);
                // navigate('/');
            } else if (response.status === 400) {
                // handle invalid credentials
            } else if (response.status === 403) {
              logoutUser();
              navigate('/auth');
            }
            setLoading(false);
            setUserLoading(false);
        })
        .catch(error => {
            console.log('error in promise during login:', error);
            alert(error);
        });
    }

    useEffect(() => {
        if (cookies['session'] !== undefined && Object.keys(globalUser).length === 0) {
          refresh();
        } else if (cookies['session'] === undefined && Object.keys(globalUser).length === 0) {
            navigate('/auth');
        } else if (noOrg) {
          setNoOrg(false);
          navigate('/auth');
        }

        updateUnit('');
        updateAuditType('');
    }, [])
    
    return (
      <>
        {/* { loading ? <div className="spinner"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner><span className="loading">Loading...</span></div> : <Organizations refresh={refresh}/> */}
        {/* { <Organizations refresh={refresh}/> } */}
        {Object.keys(globalUser !== 0) ? <Organizations setNoOrg={setNoOrg} refresh={refresh} /> : 'NOTHING'}
        {/* {JSON.stringify(globalUser.user.orgs)} */}
      </>
  )
}

export default Home
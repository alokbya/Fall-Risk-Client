import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { BrowserRouter, Router, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/global/userState';
import Spinner from 'react-bootstrap/Spinner';
import Organization from '../orgs/organization';
import '../../styles/loading/spinner.css';

const Home = () => {
    const navigate = useNavigate();
    const { globalUser, loginUser } = useContext(UserContext);
    const [ cookies, setCookie, removeCookie ] = useCookies(['session']);

    const [ loading, setLoading ] = useState(true);

    const refresh = async () => {
      const response = fetch('http://localhost:3001/auth/refresh', {
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
                navigate('/');
            } else if (response.status === 400) {
                // handle invalid credentials
            }
            setLoading(false);
        })
        .catch(error => {
            console.log('error in promise during login:', error);
            alert(error);
        });
    }

    useEffect(() => {
        setLoading(true);
        if (cookies['session'] !== 'undefined' && Object.keys(globalUser).length === 0){
          refresh();
        } else if (Object.keys(globalUser).length === 0) {
            navigate('/auth');
        } else {
          setLoading(false);
        }
    }, [])
    
    return (
      <>
        { loading ? <div className="spinner"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner><span className="loading">Loading...</span></div> : <Organization />
          
        }
      </>
  )
}

export default Home
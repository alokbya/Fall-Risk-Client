import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Router, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/global/userState';

const Home = () => {
    const navigate = useNavigate();
    const { globalUser } = useContext(UserContext);
   
    useEffect(() => {
        if (Object.keys(globalUser).length === 0 || globalUser === {} || globalUser === undefined || globalUser === null) {
            navigate('/auth');
        } else {
          const x = globalUser;
        }
    }, [])
    
    return (
      <>
        <h1>Welcome home</h1>
        {JSON.stringify(globalUser)}
      </>
  )
}

export default Home
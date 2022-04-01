import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/global/userState';


const Organization = () => {

  const { globalUser } = useContext(UserContext);
  const [ orgs, setOrgs ] = useState();


  // get organizations related to user
  const getOrgs = async () => {
    const response = await fetch('http://localhost:3001/orgs');
    if (response.status === 200) {
      const orgs = await response.json();
      setOrgs(orgs);
    }
    
    // .then( async (response) => {
    //   const orgs = await response.json();
    //   setOrgs(orgs);
    // })
    // .catch(error => {
    //   console.error(error);
    //   alert(error);
    // });
  }

  useEffect(() => {
    getOrgs();
  }, [])
  
  return (
    <>
        <div className='organization'>
            <header>
              <span className='org-owner'>{JSON.stringify(orgs)}</span>
            </header>
        </div>
    </>
   )
}

export default Organization
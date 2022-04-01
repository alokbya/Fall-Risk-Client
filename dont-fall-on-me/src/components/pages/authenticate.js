import React, { useState } from 'react'
import Login from '../auth/login';
import Register from '../auth/register';

import '../../styles/auth/authenticate.css';

const Authenticate = () => {
    const [ register, setRegister ] = useState(false);
    const [ first_name, setFirstName ] = useState();
    const [ last_name, setLastName ] = useState();
    const [ email, setEmail ] = useState();
    const [ title, setTitle ] = useState();
    const [ password, setPassword ] = useState();
    const [ repeatPassword, setRepeatPassword ] = useState();

    const toggleAuth = () => {
      setRegister(!register);
    }

    return (
      <>
        {register ? <Register first_name={first_name}
                              setFirstName={setFirstName}
                              last_name={last_name}
                              setLastName={setLastName}
                              email={email}
                              setEmail={setEmail}
                              title={title}
                              setTitle={setTitle}
                              password={password}
                              setPassword={setPassword}
                              repeatPassword={repeatPassword}
                              setRepeatPassword={setRepeatPassword}
                              /> : 
                    <Login email={email}
                              setEmail={setEmail}
                              password={password}
                              setPassword={setPassword}/>}
        {register ? <span className='toggle-auth register'><a className='toggle-auth' onClick={toggleAuth}>Already have an account? Login here!</a></span> : 
        <span className='toggle-auth register'><a className='toggle-auth' onClick={toggleAuth}>Don't have an account yet? Sign up here!</a></span>}
      </>
  )
}

export default Authenticate
import React, { useState, useContext } from 'react'
import { Auth } from 'aws-amplify';

import '../../styles/auth/signup.css';
import ValidatePassword from './validatePassword';

import { UserContext } from '../../context/global/userState';


const SignUp = ({u}) => {
    const [ firstName, setFirstName ] = useState();
    const [ lastName, setLastName ] = useState();
    const [ email, setEmail ] = useState();
    const [ title, setTitle ] = useState();
    const [ password, setPassword ] = useState();
    const p = u;
    const { globalUser, updateUser } = useContext(UserContext);

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,          // optional
                    name: firstName,
                    family_name: lastName,
                    title: title,
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
            alert(error);
        }
    }

    return (
      <>
        <form className='sign-up'>
            <h2 className='label'>Sign Up</h2>
            <input
                className='auth-form sign-up first-name'
                type='text'
                placeholder='First Name'
                onChange={e => setFirstName(e.target.value)}
            ></input>
            <input
                className='auth-form sign-up last-name'
                type='text'
                placeholder='Last Name'
                onChange={e => setLastName(e.target.value)}
            ></input>
            <input
                className='auth-form sign-up email'
                type='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
            ></input>
             <input
                className='auth-form sign-up title'
                type='text'
                placeholder='Title (e.g. Physical Therapist)'
                onChange={e => setTitle(e.target.value)}
            ></input>
            <input
                className='auth-form sign-up last-name'
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
            ></input>
            {password !== undefined && password.length !== 0 ? <ValidatePassword password={password} /> : ''}
            <button className='sign-up-form sign-up submit' onSubmit={e => e.preventDefault()} onClick={signUp}>Submit</button>
        </form>
      </>
  )
}

export default SignUp
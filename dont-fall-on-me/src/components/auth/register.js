import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react'

import ValidatePassword from './validatePassword';

import { UserContext } from '../../context/global/userState';

import '../../styles/auth/register.css';

const Register = () => {

    const navigate = useNavigate();

    const [ first_name, setFirstName ] = useState();
    const [ last_name, setLastName ] = useState();
    const [ email, setEmail ] = useState();
    const [ title, setTitle ] = useState();
    const [ password, setPassword ] = useState();
    const [ repeatPassword, setRepeatPassword ] = useState();
    const { globalUser, updateUser, loginUser, logoutUser } = useContext(UserContext);

    const signUp = async () => {
        try {
            const user = {
                first_name,
                last_name,
                email,
                title,
                password
            };
            const endpoint = process.env.REACT_APP_API;
            endpoint.replace('"', '');
            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                const user = await response.json();
                loginUser(user)
                navigate('/');
            }
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
                className='auth-form sign-up password'
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
            ></input>
            <input
                className='auth-form sign-up password repeat-password'
                type='password'
                placeholder='Verify Password'
                onChange={e => setRepeatPassword(e.target.value)}
            ></input>
            {password !== undefined && password.length !== 0 ? <ValidatePassword password={password} repeatPassword={repeatPassword} /> : ''}
            <button className='sign-up-form sign-up submit' onSubmit={e => e.preventDefault()} onClick={signUp}>Submit</button>
        </form>
      </>
  )
}

export default Register;
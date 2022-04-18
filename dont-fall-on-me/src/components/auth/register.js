import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import ValidatePassword from './validatePassword';
import { UserContext } from '../../context/global/userState';
import { useCookies } from 'react-cookie';

import '../../styles/auth/register.css';

const Register = ({ first_name, setFirstName, 
                    last_name, setLastName,
                    email, setEmail,
                    title, setTitle,
                    password, setPassword,
                    repeatPassword, setRepeatPassword }) => {

    const navigate = useNavigate();

    const { globalUser, updateUser, loginUser, logoutUser } = useContext(UserContext);
    const [ cookies, setCookies ] = useCookies(['session']);
    const [ search, setSearch ] = useSearchParams();

    const signUp = async (event) => {
        event.preventDefault();
        try {
            const user = {
                first_name,
                last_name,
                email: encodeURI(email),
                title,
                password,
                org_id: search.get('org'),
            };
            const encoder = new TextEncoder();
            const payload = encoder.encode(user);
            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then( async (response) => {
                if (response.status === 201) {
                    let res_user = await response.json();
                    loginUser(res_user);
                    navigate('/');
                } else if (response.status === 409) {
                    alert('User already exists');
                } else if (response.status === 400) {
                    alert('All inputs are required');
                }
            })
            .catch( error => {
                console.error(error);
                alert(error);
            });
            
        } catch (error) {
            console.log('error signing up:', error);
            alert(error);
        }
    }

    return (
      <>
        {search.get('org')}
        <form className='sign-up'>
            <h2 className='label'>Sign Up</h2>
            <input
                className='auth-form sign-up first-name'
                type='text'
                value={first_name}
                placeholder='First Name'
                onChange={e => setFirstName(e.target.value)}
            ></input>
            <input
                className='auth-form sign-up last-name'
                type='text'
                value={last_name}
                placeholder='Last Name'
                onChange={e => setLastName(e.target.value)}
            ></input>
            <input
                className='auth-form sign-up email'
                type='email'
                value={email}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
            ></input>
             <input
                className='auth-form sign-up title'
                type='text'
                value={title}
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
import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/global/userState';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

const Login = ({ email, setEmail, password, setPassword }) => {
    
    const navigate = useNavigate();

    const { globalUser, updateUser, loginUser, logoutUser } = useContext(UserContext);
    const [ cookies, setCookies ] = useCookies(['session']);
    const [ invalidUser, setInvalidUser ] = useState(false);

    const login = async (event) => {
        event.preventDefault();
        try {
            const user = {
                email: encodeURI(email),
                password
            };
            // const endpoint = process.env.REACT_APP_API;
            // endpoint.replace('"', '');
            const encoder = new TextEncoder();
            const payload = encoder.encode(user);
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(async (response) => {
                if (response.status === 200) {
                    let res_user = await response.json();
                    loginUser(res_user);
                    setInvalidUser(false);
                    navigate('/');
                } else if (response.status === 401) {
                    // handle invalid credentials
                    setInvalidUser(true);
                }
            })
            .catch(error => {
                console.log('error in promise during login:', error);
                alert(error);
            });
        } catch (error) {
            console.log('error in try/catch during login:', error);
            alert(error);
        }
    }

    return (
    <>
        <form className='sign-up'>
            <h2 className='label'>Log In</h2>
            <input
                className='auth-form sign-up email'
                type='email'
                value={email}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
            ></input>
            <input
                className='auth-form sign-up password'
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
            ></input>
            <button className='sign-up-form sign-up submit' onSubmit={e => e.preventDefault()} onClick={login}>Submit</button>
            {invalidUser ? <span className='invalid-entry'>Username or password is invalid</span> : ''}
        </form>
    </>
  )
}

export default Login
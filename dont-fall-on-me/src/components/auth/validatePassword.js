import React, { useState, useEffect} from 'react'
import '../../styles/auth/validatePassword.css';

const ValidatePassword = ({ password, repeatPassword }) => {
    
    const [ validator, setvalidator ] = useState({});
    const passMinLength = 8;    // change in regex as needed
    const feedback = {
        lowercase: {
          key: 'feedback-1', 
          value: 'Password must contain at least one lowercase letter'
        },
        uppercase: {
          key: 'feedback-2',
          value: 'Password must contain at least one uppercase letter'
        },
        numeric: {
          key: 'feedback-3',
          value: 'Password must contain at least one number'
        },
        special: {
          key: 'feedback-4',
          value: 'Password must contain at least one special character'
        },
        minLength: {
          key: 'feedback-5',
          value: `Password must be at least ${passMinLength} characters long`
        },
        repeat: {
          key: 'feedback-6',
          value: 'Password entries must be matching',
        },
    }

    const validatePassword = () => {
        const lowercase = /(?=.*[a-z])/;
        const uppercase = /(?=.*[A-Z])/;
        const numeric = /(?=.*[0-9])/;
        const special = /(?=.*[!@#$%^&*])/;
        const minLength = /(?=.{8,})/;

        const x = {};
        const lowercaseResult = lowercase.test(password);
        const uppercaseResult = uppercase.test(password);
        const numericResult = numeric.test(password);
        const specialResult = special.test(password);
        const minLengthResult = minLength.test(password);
        const repeatedPasswordResult = password == repeatPassword; 

        const result = {
            lowercase: lowercaseResult,
            uppercase: uppercaseResult,
            numeric: numericResult,
            special: specialResult,
            minLength: minLengthResult,
            repeat: repeatedPasswordResult,
        }

        setvalidator(result);
    }

    // validatePassword(password);
    const stylePassword = () => {

    }
    
    useEffect(() => {
      validatePassword();
    }, [password, repeatPassword])
    

    return (
      <>
        <ul className='password-feedback-list'>
        {Object.keys(feedback).map(f => <li key={feedback[f].key} className={validator[f] ? 'password-feedback password-valid' : 'password-feedback password-invalid'}>{feedback[f].value}</li>)}
        </ul>
      </>
  )
}

export default ValidatePassword
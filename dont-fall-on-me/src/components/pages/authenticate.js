import React, { useState } from 'react'
import Register from '../auth/register';

const Authenticate = () => {
    const [ register, setRegister ] = useState(false);
    return (
      <>
        <Register />
      </>
  )
}

export default Authenticate
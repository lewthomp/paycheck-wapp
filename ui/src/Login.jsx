import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import LogInButton from './components/LogInButton.jsx';


const Login = () => {
  return (
    <div style={{ position: 'fixed', top: '20vh', left: '41vw'}}>
        <h1>LOGIN</h1>
        <LogInButton />
    </div>
  )
}

export default Login
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.post('/login', {
      userEmail: userEmail,
      password: password
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
    setUserEmail('');
    setPassword('');
  }

  // delete later
  const checkState = () => {
    console.log(userEmail, password);
  }

  return (
      <>
      <form onSubmit={handleSubmit}>
        <input 
          id='userEmail' 
          value={userEmail} 
          type="text" 
          placeholder='Enter email address'
          onChange={e => setUserEmail(e.target.value)}/>
        <input 
          id='password' 
          value={password} 
          type="password" 
          placeholder='Enter password'
          onChange={e => setPassword(e.target.value)}/>
        <button>Login</button>
      </form>

      {/* delete button later */}
      <button onClick={checkState}>check state</button>
      </>
  )
}

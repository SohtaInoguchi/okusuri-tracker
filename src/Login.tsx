import React from 'react';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUser('');
    setPassword('');
    console.log(user, password);
  }

  const checkState = () => {
    console.log(user, password);
  }

  return (
      <>
      <form onSubmit={handleSubmit}>
        <input 
          id='username' 
          value={user} 
          type="text" 
          placeholder='Enter email address'
          onChange={e => setUser(e.target.value)}/>
        <input 
          id='password' 
          value={password} 
          type="text" 
          placeholder='Enter password'
          onChange={e => setPassword(e.target.value)}/>
        <button>Login</button>
      </form>
      <button onClick={checkState}>check state</button>
      </>
  )
}

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { handleUserEmailLogin, handelUserPasswordLogin } from './features/counter/userSlice';
import { Check } from 'typeorm';

export default function Login() {

  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(state => state.login.userEmail);
  const password = useAppSelector(state => state.login.password);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.post('/login', {
      userEmail: userEmail,
      password: password
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
    dispatch(handleUserEmailLogin(''));
    dispatch(handelUserPasswordLogin(''));
  }

  // delete later
  // const check = () => {
  //   console.log(userEmail, password);
  // }

  return (
      <>
      <form onSubmit={handleSubmit}>
        <input 
          id='userEmail' 
          value={userEmail} 
          type="text" 
          placeholder='Enter email address'
          onChange={(e) => dispatch(handleUserEmailLogin(e.target.value))}
          />
        <input 
          id='password' 
          value={password} 
          type="password" 
          placeholder='Enter password'
          onChange={(e) => dispatch(handelUserPasswordLogin(e.target.value))}
          />
        <button>Login</button>
      </form>

      {/* delete button later */}
      {/* <button onClick={check}>check</button> */}
      </>
  )
}

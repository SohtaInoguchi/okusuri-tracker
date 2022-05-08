import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { handleUserEmailLogin, handelUserPasswordLogin, setLoginSuccess } from './features/counter/userSlice';
import { Check } from 'typeorm';
import { Navigate, Link } from 'react-router-dom';

export default function Login() {

  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(state => state.login.userEmail);
  const password = useAppSelector(state => state.login.password);
  const isLoginSuccess = useAppSelector(state => state.login.isLoginSuccessful);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.post('/login', {
      userEmail: userEmail,
      password: password
    })
    .then(res => {
      if (res.data === "No user found") {
        console.log("No matched user");
      }
      else {
        dispatch(setLoginSuccess());
      }
    })
    .catch(err => console.error(err));

    dispatch(handleUserEmailLogin(''));
    dispatch(handelUserPasswordLogin(''));
  }

  return (
      <>
      {isLoginSuccess && <Navigate to='/dashboard' replace/>}
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
      </>
  )
}

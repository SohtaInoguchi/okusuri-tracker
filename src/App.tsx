import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterNewRecord from './RegisterNewRecord';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { useAppSelector, useAppDispatch } from './app/hooks';
import React from 'react';

// function App() {
function App() {
  const isLoginSuccess = useAppSelector(state => state.login.isLoginSuccessful);

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path='register' element={<RegisterNewRecord />}/>
    </Routes>
  );
}

export default App;

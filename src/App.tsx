import React, { createRef } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { send } from 'process';
import axios from 'axios';

function App() {

  const medicationNameInput = React.createRef<HTMLInputElement>();
  const pharmacyNameInput = React.createRef<HTMLInputElement>();
  const hospitalNameInput = React.createRef<HTMLInputElement>();
  const prescriptionDateInput = React.createRef<HTMLInputElement>();

  const sendData = (e:any) => {
    e.preventDefault();
    axios.post('/register-medication', {
      medicationName: medicationNameInput.current?.value,
      pharmacyName: pharmacyNameInput.current?.value,
      hospitalName: hospitalNameInput.current?.value,
      prescriptionDate: prescriptionDateInput.current?.value
    })
    .then(res => console.log("response", res))
    .catch(err => console.error(err));
  }

  return (
    <>
      <input ref={medicationNameInput} type="text" id="name-of-medication" placeholder="Name of medication"/>
      <input ref={pharmacyNameInput} type="text" id="name-of-pharmacy" placeholder="Name of pharmacy"/>
      <input ref={hospitalNameInput} type="text" id="name-of-hospital" placeholder="Name of hospital"/>
      <input ref={prescriptionDateInput} type="date" id="prescription-date" placeholder="Date of prescription"/>
      <button onClick={sendData}>Send</button>
    </>
  );
}

export default App;

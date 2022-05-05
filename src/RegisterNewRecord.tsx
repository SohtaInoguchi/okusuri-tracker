import React from "react";
import axios from 'axios';


export default function RegisterNewRecord() {
    const medicationNameInput = React.createRef<HTMLInputElement>();
    const pharmacyNameInput = React.createRef<HTMLInputElement>();
    const hospitalNameInput = React.createRef<HTMLInputElement>();
    const prescriptionDateInput = React.createRef<HTMLInputElement>();
  
    const sendData = (e:any) => {
      e.preventDefault();
      axios.post('/register-prescription', {
        medicationName: medicationNameInput.current?.value,
        pharmacyName: pharmacyNameInput.current?.value,
        hospitalName: hospitalNameInput.current?.value,
        prescriptionDate: prescriptionDateInput.current?.value
      })
      .then(res => console.log("response", res))
      .catch(err => console.error(err));
  
      medicationNameInput.current!.value = "";
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
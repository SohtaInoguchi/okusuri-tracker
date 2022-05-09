import React from "react";
import axios from 'axios';
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setMedicationName, setPharmacyName, setHospitalName, setPrescriptionDate } from "./features/counter/registerSlice";


export default function RegisterNewRecord() {
    const dispatch = useAppDispatch();
    const medicationName = useAppSelector(state => state.prescriptionRegister.medicationName);
    const pharmacyName = useAppSelector(state => state.prescriptionRegister.pharmacyName);
    const hospitalName = useAppSelector(state => state.prescriptionRegister.hospitalName);
    const prescriptionDate = useAppSelector(state => state.prescriptionRegister.prescriptionDate);
    const userEmail = useAppSelector(state => state.login.userEmail);
    const isLoggedin = useAppSelector(state => state.login.isLoginSuccessful);
    // const medicationNameInput = React.createRef<HTMLInputElement>();
    // const pharmacyNameInput = React.createRef<HTMLInputElement>();
    // const hospitalNameInput = React.createRef<HTMLInputElement>();
    // const prescriptionDateInput = React.createRef<HTMLInputElement>();
  
    const registerPrescription = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      console.log("userEmail???", userEmail);
      axios.post('/register-prescription', {
        userEmail: userEmail,
        medicationName: medicationName,
        pharmacyName: pharmacyName,
        hospitalName: hospitalName,
        prescriptionDate: prescriptionDate
      })
      .then(res => console.log("response", res))
      .catch(err => console.error(err));
  
      // medicationNameInput.current!.value = "";
    }

    const check = (e:any) => {
      e.preventDefault();
      console.log(isLoggedin);
    }

    return (
        <>
        <form onSubmit={registerPrescription}>
          <input 
            id="medicationName" 
            value={medicationName}
            type="text" 
            placeholder="Name of medication"
            onChange={e => dispatch(setMedicationName(e.target.value))}/>
          <input 
            id="pharmacyName" 
            value={pharmacyName}
            type="text" 
            placeholder="Name of pharmacy"
            onChange={e => dispatch(setPharmacyName(e.target.value))}/>
          <input 
            id="hospitalName" 
            value={hospitalName}
            type="text" 
            placeholder="Name of hospital"
            onChange={e => dispatch(setHospitalName(e.target.value))}/>
          <input 
            id="prescriptionDate" 
            value={prescriptionDate}
            type="date" 
            placeholder="Date of prescription"
            onChange={e => dispatch(setPrescriptionDate(e.target.value))}/>
          {/* <input ref={pharmacyNameInput} type="text" id="name-of-pharmacy" placeholder="Name of pharmacy"/>
          <input ref={hospitalNameInput} type="text" id="name-of-hospital" placeholder="Name of hospital"/>
          <input ref={prescriptionDateInput} type="date" id="prescription-date" placeholder="Date of prescription"/> */}
          <button>Register prescription</button>
        </form>
        <button onClick={check}>check</button>
        </>
    );
}
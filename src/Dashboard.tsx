import React from 'react'
import { useAppDispatch, useAppSelector } from "./app/hooks";


export default function Dashboard() {
  const isLoggedin = useAppSelector(state => state.login.isLoginSuccessful);
  const userEmail = useAppSelector(state => state.login.userEmail);

  const check = (e:any) => {
    e.preventDefault();
    console.log("Is logged in", isLoggedin);
    console.log("email!!!!", userEmail);
  }
  return (
    <>
      <div>Dashboard</div>
      <button onClick={check}>check</button>
    </>
  )
}

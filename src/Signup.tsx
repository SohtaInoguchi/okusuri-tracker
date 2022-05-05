import React from 'react'
import axios from 'axios';

export default function Signup() {
  const userName = React.createRef<HTMLInputElement>();
  const email = React.createRef<HTMLInputElement>();
  const password = React.createRef<HTMLInputElement>();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    axios.post('/user-signup', {
      userName: userName.current?.value,
      email: email.current?.value,
      password: password.current?.value,
    })

    userName.current!.value = "";
    email.current!.value = "";
    password.current!.value = "";
  }

  return (
      <>
        <input type="text" ref={userName} placeholder='Enter user name'/>
        <input type="text" ref={email} placeholder='Enter email address'/>
        <input type="text" ref={password} placeholder='Enter password'/>
        <button onClick={handleOnClick}>Sign up</button>
      </>
  )
}

import React, { useState } from 'react';

export default function Logsign(props) {
  // const [state, setState] = useState({
  //   name: '',
  //   password: ''
  // });
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  const handleNameInput = event => setName(event.currentTarget.value);
  const handlePasswordInput = event => setPassword(event.currentTarget.value);


  const login = () => {
    props.onLogin(name, password);
  }
  return (
    <div class="form-wrapper">
    {/* <form id="sign-up-form">
      <input type="text" placeholder="enter username"></input>
      <input type="password" placeholder="password"></input>
      <button>Sign up!</button>
    </form> */}
    <form if="log-in-form">
       <input type="text" placeholder="enter username" onChange={handleNameInput}></input>
      <input type="password" placeholder="password" onChange={handlePasswordInput}></input>
      <button>Sign up!</button>
    </form>
    </div>
  )
}
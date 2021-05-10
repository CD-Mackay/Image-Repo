import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';

export default function Logsign(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  const history = useHistory();
  const handleNameInput = event => setName(event.currentTarget.value);
  const handlePasswordInput = event => setPassword(event.currentTarget.value);


  const login = () => {
    props.onLogin(name, password);
    props.setCookie(name);
    history.push('/upload');
  }
  return (
    <div className="form-wrapper">
    {/* <form id="sign-up-form">
      <input type="text" placeholder="enter username"></input>
      <input type="password" placeholder="password"></input>
      <button>Sign up!</button>
    </form> */}
    <form if="log-in-form" onSubmit={event => event.preventDefault()}>
       <input type="text" placeholder="enter username" onChange={handleNameInput}></input>
      <input type="password" placeholder="password" onChange={handlePasswordInput}></input>
      <button onClick={login}>Sign up!</button>
    </form>
    </div>
  )
}
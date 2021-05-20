import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import './buttonstyles.css';
import './loginstyles.css';


export default function Logsign(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  const history = useHistory();
  const handleNameInput = event => setName(event.currentTarget.value);
  const handlePasswordInput = event => setPassword(event.currentTarget.value);


  const login = () => {
    props.onLogin(name, password);
    history.push('/upload');
  }
  return (
    <div className="form-wrapper">
    <form id="log-in-form" onSubmit={event => event.preventDefault()}>
      <div className="input-wrapper">
        <input type="text" placeholder="enter username" onChange={handleNameInput}></input>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="password" onChange={handlePasswordInput}></input>
      </div>
      <button className="login-button" onClick={login}>Sign up!</button>
    </form>
    </div>
  )
}
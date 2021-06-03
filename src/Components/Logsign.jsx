import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import useApplicationData from '../Hooks/useApplicationData';
import './buttonstyles.scss';
import './loginstyles.scss';


export default function Logsign(props) {
  const [newUser, setNewUser] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { users } = useApplicationData();


  const validate = (name, password, users) => {
    const isValid = users.filter(user => (user.password_digest == password && user.name == name));
    console.log(isValid);
  }

  const history = useHistory();
  const handleNameInput = event => setName(event.currentTarget.value);
  const handlePasswordInput = event => setPassword(event.currentTarget.value);


  const signup = () => {
    props.onSignUp(name, password);
    history.push('/upload');
  }
  const login = () => {
    validate(name, password, users);
    props.onLogin(name, password);
    history.push('/upload');
  }

  return (
    <div className="form-wrapper">
    {!newUser && <form id="log-in-form" onSubmit={event => event.preventDefault()}>
      <div className="input-wrapper">
        <input type="text" placeholder="enter username" onChange={handleNameInput}></input>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="password" onChange={handlePasswordInput}></input>
      </div>
      <button className="login-button" onClick={login}>Login!</button>
    </form>}
    {newUser && <form id="sign-up-form" onSubmit={event => event.preventDefault()}>
      <div className="input-wrapper">
        <input type="text" placeholder="select username" onChange={handleNameInput}></input>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="pick a secure password" onChange={handlePasswordInput}></input>
      </div>
      <button className="login-button" onClick={signup}>Sign up!</button>
    </form>}
    <button className="switch-button" onClick={newUser ? () => setNewUser(false) : () => setNewUser(true)}>{newUser ? "Click here to Login!" : "New Here? Sign up!"}</button>
    </div>
  )
}
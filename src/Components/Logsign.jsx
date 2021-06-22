import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import Helpers from '../Hooks/useApplicationData';
import { useCookies } from 'react-cookie';
import './buttonstyles.scss';
import './loginstyles.scss';


export default function Logsign({users, display}) {
  const [newUser, setNewUser] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
  const [error, setError] = useState(false);


  const validate = (name, password, users) => {
    const isValid = users.filter(user => (user.password_digest === password && user.name === name));
    return isValid.length > 0;
  };
  
  const history = useHistory();
  const handleNameInput = event => setName(event.currentTarget.value);
  const handlePasswordInput = event => setPassword(event.currentTarget.value);


  const signup = () => {
    Helpers.signUp(name, password);
    setCookie("user", name, { path: '/' });
    history.push('/upload');
  };

  const login = () => {
    if (validate(name, password, users)) {
    Helpers.loginUser(name, password);
    setCookie("user", name, { path: '/' });
    history.push('/upload');
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <div className="form-wrapper">
      {error && <p className="error-message">Invalid username/password</p>}
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
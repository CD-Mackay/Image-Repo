import React from 'react';
import useApplicationData from '../Hooks/useApplicationData';
import './buttonstyles.css';
import { useHistory} from 'react-router-dom';


export default function LogoutButton() {

  const history = useHistory();

  const { logoutUser } = useApplicationData();

  const logOut = () => {
    logoutUser();
    history.push('/');
  }
  return (
    <div>
      <button className="log-button" onClick={logOut}>Logout</button>
    </div>
  )
}
import React from 'react';
import Helpers from '../Hooks/useApplicationData';
import './buttonstyles.scss';
import { useHistory} from 'react-router-dom';


export default function LogoutButton() {

  const history = useHistory();


  const logOut = () => {
    Helpers.logoutUser();
    history.push('/');
  }
  return (
    <div>
      <button className="log-button" onClick={logOut}>Logout</button>
    </div>
  )
}
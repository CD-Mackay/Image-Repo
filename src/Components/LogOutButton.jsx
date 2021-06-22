import React from 'react';
import Helpers from '../Hooks/useApplicationData';
import { withCookies, Cookies, useCookies } from 'react-cookie';
import './buttonstyles.scss';
import { useHistory} from 'react-router-dom';


export default function LogoutButton() {

  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);


  const logOut = () => {
    Helpers.logoutUser();
    removeCookie("user");
    history.push('/');
  };
  
  return (
    <div>
      <button className="log-button" onClick={logOut}>Logout</button>
    </div>
  )
}
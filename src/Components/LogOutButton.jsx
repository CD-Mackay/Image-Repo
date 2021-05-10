import React from 'react';
import useApplicationData from '../Hooks/useApplicationData';

export default function LogoutButton() {

  const { logoutUser } = useApplicationData();

  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
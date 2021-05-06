import React from 'react';

export default function Logsign() {
  return (
    <div class="form-wrapper">
    <form id="sign-up-form">
      <input type="text" placeholder="enter username"></input>
      <input type="password" placeholder="password"></input>
      <button>Sign up!</button>
    </form>
    <form if="log-in-form">
       <input type="text" placeholder="enter username"></input>
      <input type="password" placeholder="password"></input>
      <button>Sign up!</button>
    </form>
    </div>
  )
}
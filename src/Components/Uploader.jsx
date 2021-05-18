import React from 'react';
import LogOutButton from './LogOutButton';
import './buttonstyles.css';


export default function Uploader(props) {
  return (
    <div>
      <input type="file" onChange={props.save} />
      <button className="upload-button" onClick={props.upload}>Upload</button>
      <LogOutButton />
    </div>
  )
}
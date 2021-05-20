import React from 'react';
import LogOutButton from './LogOutButton';
import './buttonstyles.css';


export default function Uploader(props) {
  return (
    <div className="upload-wrapper">
      <h4>Upload new Image</h4>
      <input type="file" onChange={props.save} />
      <button className="upload-button" onClick={props.upload}>Upload</button>
    </div>
  )
}
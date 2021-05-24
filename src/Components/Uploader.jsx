import React, { useRef } from 'react';
import LogOutButton from './LogOutButton';
import './buttonstyles.css';


export default function Uploader(props) {

  const fileInput = useRef(null);

  return (
    <div className="upload-wrapper">
      <h4>Upload new Image</h4>
      <button className="select-button" onClick={() => fileInput.current.click()}>Choose File</button>
      <input type="file" ref={fileInput} onChange={props.save} style={{ display: 'none' }}/>
      <button className="upload-button" onClick={props.upload}>Upload</button>
    </div>
  )
}
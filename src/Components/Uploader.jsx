import React, { useRef, useState } from 'react';
import LogOutButton from './LogOutButton';
import './buttonstyles.scss';
import './uploader.scss';


export default function Uploader(props) {


  const fileInput = useRef(null);

  return (
    <div className="upload-wrapper">
      <h4>Upload new Image</h4>
      <div className="up-control-wrap">
      <button className="upload-button" onClick={() => fileInput.current.click()}>Choose File</button>
      <input type="file" ref={fileInput} onChange={props.save} style={{ display: 'none' }}/>
      <button className="upload-button" onClick={props.upload}>Upload</button>
      </div>
    </div>
  )
}
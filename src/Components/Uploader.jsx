import React from 'react';
import LogOutButton from './LogOutButton';

export default function Uploader(props) {
  return (
    <div>
      <input type="file" onChange={props.save} />
      <button onClick={props.upload}>Upload</button>
      <LogOutButton />
    </div>
  )
}
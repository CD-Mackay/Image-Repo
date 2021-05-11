import React from 'react';
import LogOutButton from './LogOutButton';
import ImageList from './ImageList';

export default function Uploader(props) {
  return (
    <div>
      <input type="file" onChange={props.saveFile} />
      <button onClick={props.onUpload}>Upload</button>
      <LogOutButton />
    </div>
  )
}
import React from 'react';

export default function Uploader(props) {
  return (
    <div>
      <input type="file" onChange={props.saveFile} />
      <button onClick={props.onUpload}>Upload</button>
    </div>
  )
}
import React from 'react';

export default function ImageListItem(props) {
  return (
    <div>
    <p>{props.name}</p>
    <img src={props.file_path} />
    </div>
  )
}
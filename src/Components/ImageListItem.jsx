import React from 'react';

export default function ImageListItem(props) {
  console.log(props);
  return (
    <div>
    <p>{props.name}</p>
    <img src={props.path} alt={props.name} />
    </div>
  )
};

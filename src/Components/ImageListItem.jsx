import React from 'react';
import useApplicationData from '../Hooks/useApplicationData';

export default function ImageListItem(props) {

  const filePath = props.path;
  const truncatedPath = filePath.slice(filePath.length - 7, filePath.length);
  console.log(filePath.slice(filePath.length - 7, filePath.length));
  const imageSource = "../" + truncatedPath + props.name;
  console.log(filePath);
  return (
    <div>
    <p>{props.name}</p>
    <img src={imageSource} alt={props.name} />
    </div>
  )
};

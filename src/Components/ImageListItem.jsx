import React from 'react';
import useApplicationData from '../Hooks/useApplicationData';
import './imagestyles.css';

export default function ImageListItem(props) {

  const { getDate, favouriteImage } = useApplicationData();
  const filePath = props.path;
  const truncatedPath = filePath.slice(filePath.length - 7, filePath.length);
  const imageSource = "../" + truncatedPath + props.name;
  
  return (
    <div className="image-wrapper">
    <p>{props.name.slice(0, props.name.length -4)}</p>
    <p>Filetype: {props.name.slice(props.name.length -3, props.name.length)}</p>
    <p>Uploaded: {getDate(props.date)}</p>
    <img className="display-image" src={`../${props.name}`} alt={props.name} />
    <button onClick={() => favouriteImage(props.id)}>Favourite</button>
    {props.favourite && <p>Favourited!!!</p>}
    </div>
  )
};

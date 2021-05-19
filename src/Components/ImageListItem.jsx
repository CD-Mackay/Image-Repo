import React, { useState } from 'react';
import useApplicationData from '../Hooks/useApplicationData';
import './imagestyles.css';

export default function ImageListItem(props) {
  const [fave, setFave] = useState(props.favourite);
  const { getDate, favouriteImage, deleteImage, getAllImages } = useApplicationData();
  const filePath = props.path;
  const truncatedPath = filePath.slice(filePath.length - 7, filePath.length);
  const imageSource = "../" + truncatedPath + props.name;

  const makeFavourite = () => {
    favouriteImage(props.id, true);
    setFave(true);
  };

  const unFavourite = () => {
    favouriteImage(props.id, false);
    setFave(false);
  }
 const makeDelete = () => {
    deleteImage(props.id);
    getAllImages();
  }
  
  return (
    <div className="image-wrapper">
    <p>{props.name.slice(0, props.name.length -4)}</p>
    <p>Filetype: {props.name.slice(props.name.length -3, props.name.length)}</p>
    <p>Uploaded: {getDate(props.date)}</p>
    <div className="control-wrapper">
    <img className={fave ? "fave-image" : "display-image"} src={`../${props.name}`} alt={props.name} />
    <div className="button-wrapper">
    {!fave &&<button className="favourite-button" onClick={makeFavourite}>Favourite</button>}
    {fave && <button className="unfavourite-button" onClick={unFavourite}>unFavourite</button>}
    <button onClick={makeDelete}>Delete</button>
    </div>
    </div>
    </div>
  )
};

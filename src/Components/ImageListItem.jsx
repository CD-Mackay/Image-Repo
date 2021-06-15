import React, { useState } from 'react';
import Helpers from '../Hooks/useApplicationData';
import './imagestyles.scss';

export default function ImageListItem(props) {
  const [fave, setFave] = useState(props.favourite);
  const filePath = props.path;
  const truncatedPath = filePath.slice(filePath.length - 7, filePath.length);
  const imageSource = "../" + truncatedPath + props.name;

  const makeFavourite = () => {
    Helpers.favouriteImage(props.id, true);
    setFave(true);
  };

  const unFavourite = () => {
    Helpers.favouriteImage(props.id, false);
    setFave(false);
  };
  
  return (
    <div className={fave ? "fav-img-wrap" : "image-wrapper"}>
    <p>{props.name.slice(0, props.name.length -4)}</p>
    <p>Filetype: {props.name.slice(props.name.length -3, props.name.length)}</p>
    <p>Uploaded: {Helpers.getDate(props.date)}</p>
    <div className="control-wrapper">
    <img className="display-image" src={`../${props.name}`} alt={props.name} />
    <div className="button-wrapper">
    {!fave &&<button className="switch-button" onClick={makeFavourite}>Favourite</button>}
    {fave && <button className="unfavourite-button" onClick={unFavourite}>unFavourite</button>}
    <button className="log-button" onClick={() => Helpers.deleteImage(props.id)}>Delete</button>
    </div>
    </div>
    </div>
  )
};

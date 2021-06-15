import React, { useState, useEffect } from 'react';
import Helpers from '../Hooks/useApplicationData';
import './imagestyles.scss';

export default function ImageListItem(props) {
  const filePath = props.path;
  const truncatedPath = filePath.slice(filePath.length - 7, filePath.length);
  const imageSource = "../" + truncatedPath + props.name;

  const makeFavourite = () => {
    Helpers.favouriteImage(props.id, true);
  };

  const unFavourite = () => {
    Helpers.favouriteImage(props.id, false);
  };

  useEffect(() => {
    props.setFavourited(props.favourite);
    console.log(props.favourite);
    // console.log(props.favourited);
  }, []);

  
  return (
    <div className={props.favourited ? "fav-img-wrap" : "image-wrapper"}>
    <p>{props.name.slice(0, props.name.length -4)}</p>
    <p>Filetype: {props.name.slice(props.name.length -3, props.name.length)}</p>
    <p>Uploaded: {Helpers.getDate(props.date)}</p>
    <div className="control-wrapper">
    <img className="display-image" src={`../${props.name}`} alt={props.name} />
    <div className="button-wrapper">
    {!props.favourited &&<button className="switch-button" onClick={makeFavourite}>Favourite</button>}
    {props.favourited && <button className="unfavourite-button" onClick={unFavourite}>unFavourite</button>}
    <button className="log-button" onClick={() => Helpers.deleteImage(props.id)}>Delete</button>
    </div>
    </div>
    </div>
  )
};

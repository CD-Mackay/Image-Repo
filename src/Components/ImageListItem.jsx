import React, { useState, useEffect } from 'react';
import Helpers from '../Hooks/useApplicationData';
import './imagestyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageListItem({id, key, name, path, date, favourite, favourited, setFavourited, fetchAndSetImages}) {
  const filePath = path;
  const truncatedPath = filePath.slice(filePath.length - 7, filePath.length);
  const imageSource = "../" + truncatedPath + name;

  const makeFavourite = () => {
    Helpers.favouriteImage(id, true);
    setFavourited(true);
    fetchAndSetImages();
  };

  const unFavourite = () => {
    Helpers.favouriteImage(id, false);
    setFavourited(false);
    fetchAndSetImages();
  };

  const deleteImage = () => {
    Helpers.deleteImage(id);
    fetchAndSetImages();
  }

  useEffect(() => {
    setFavourited(favourite);
  }, []);

  
  return (
    <div className={favourite ? "fav-img-wrap" : "image-wrapper"}>
    <p>{name.slice(0, name.length -4)}</p>
    <p>Filetype: {name.slice(name.length -3, name.length)}</p>
    <p>Uploaded: {Helpers.getDate(date)}</p>
    <div className="control-wrapper">
    <img className="display-image" src={`../${name}`} alt={name} />
    <div className="button-wrapper">
    {!favourite &&
      <button className="switch-button" onClick={makeFavourite}>
        Favourite?
        <FontAwesomeIcon icon={["fas", "star"]} />
      </button>}
    {favourite && 
      <button className="unfavourite-button" onClick={unFavourite}>
        Favourited!
        <FontAwesomeIcon icon={["fas", "star"]} />
      </button>}
    <button className="log-button" onClick={deleteImage}>Delete</button>
    </div>
    </div>
    </div>
  )
};

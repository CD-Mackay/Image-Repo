import React, { useState, useEffect } from 'react';
import ImageListItem from './ImageListItem';
import './imagestyles.scss';
import './imageliststyles.scss';
import { useCookies } from 'react-cookie';
import Helpers from '../Hooks/useApplicationData';

export default function ImageList({ users, cookie}) {
  const [filter, setFilter] = useState(false);
  const [favourited, setFavourited] = useState();
  const [display, setDisplay] = useState();


  const fetchAndSetImages = async () => {
    const displayedImages = await Helpers.getAllImages();
    setDisplay(displayedImages);
  };

  useEffect(() => {
    fetchAndSetImages();
  }, []);

let displayImage = <p>No images</p>

if (display) {
  displayImage = display
  .filter(image => image.favourite === true || filter === false)
  .map(image => {
    return <ImageListItem id={image.id} 
                          key={image.id} 
                          name={image.name} 
                          path={image.file_path} 
                          date={image.date_added} 
                          favourite={image.favourite}
                          favourited={favourited}
                          setFavourited={setFavourited}
                          fetchAndSetImages={fetchAndSetImages}
                         />
  })
}
  return (
    <div className="image-list-wrapper" data-testid="image-list-wrapper" >
    {!filter && <button className="switch-button" onClick={() => setFilter(true)}>View Favourites</button>}
    {filter && <button className="switch-button" onClick={() => setFilter(false)}>View All</button>}
    <div className="image-list">
      { displayImage }
    </div>
  </div>

  )
}
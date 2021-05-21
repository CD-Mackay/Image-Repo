import React, { useState, useEffect } from 'react';
import ImageListItem from './ImageListItem';
import './imagestyles.css';
import Helpers from '../Hooks/Helpers';
import { useCookies } from 'react-cookie';

export default function ImageList(props) {
  const [filter, setFilter] = useState(false);
  const [cookies, setCookie, getCookie] = useCookies();
  const { getUserID } = Helpers();

  useEffect(() => {
    getCookie(['userID']);
  }, []);


let displayImage = <p>No images</p>

if (props.display) {
  displayImage = props.display
  .filter(image => image.favourite === true || filter === false)
  .map(image => {
    return <ImageListItem id={image.id} 
                          key={image.id} 
                          name={image.name} 
                          path={image.file_path} 
                          date={image.date_added} 
                          favourite={image.favourite} />
  })
}
  return (
    <div className="image-list-wrapper">
    {!filter && <button onClick={() => setFilter(true)}>View Favourites</button>}
    {filter && <button onClick={() => setFilter(false)}>View All</button>}
    <div className="image-list">
      { displayImage }
    </div>
  </div>

  )
}
import React, { useState } from 'react';
import ImageListItem from './ImageListItem';
import './imagestyles.scss';
import './imageliststyles.scss';
import { useCookies } from 'react-cookie';

export default function ImageList(props) {
  const [filter, setFilter] = useState(false);
  const [cookies, setCookie, getCookie] = useCookies();
  const [favourited, setFavourited] = useState(null);




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
                          favourite={image.favourite}
                          favourited={favourited}
                          setFavourited={setFavourited}
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
import React from 'react';
import ImageListItem from './ImageListItem';
import './imagestyles.css';
export default function ImageList(props) {

let displayImage = <p>No images</p>

if (props.display) {
  displayImage = props.display
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
    <div className="image-list">
      { displayImage }
    </div>
  )
}
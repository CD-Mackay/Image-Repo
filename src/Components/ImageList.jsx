import React, { useEffect, useState } from 'react';
import useApplicationData from '../Hooks/useApplicationData';
import ImageListItem from './ImageListItem';
export default function ImageList(props) {

  const displayImage = props.display.map(image => {
    return <ImageListItem id={image.id} key={image.id} name={image.name} path={image.file_path} />
  })
  return (
    <div>
      {/* { displayImage } */}
    </div>
  )
}
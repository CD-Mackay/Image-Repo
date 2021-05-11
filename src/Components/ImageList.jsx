import React from 'react';
import useApplicationData from '../Hooks/useApplicationData';
import ImageListItem from './ImageListItem';
export default function ImageList() {
  const { display } = useApplicationData();

  const displayImage = display.map(image => {
    return <ImageListItem name={image.name} path={image.file_path} />
  })
  return (
    <div>
      { displayImage }
    </div>
  )
}
import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const list = images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })

  return <div className="image-list">{list}</div>
}

export default ImageList;

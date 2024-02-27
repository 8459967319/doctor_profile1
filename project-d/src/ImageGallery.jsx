import React from 'react';

const ImageGallery = ({images}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {images.map((image, index) => (
      <img key={index} src={image.image} 
      style={{ width: '100px', height: '100px',
       objectFit: 'cover', margin: '5px' }} 
       alt={`image-${index}`} />
    ))}
  </div>
);

export default ImageGallery;

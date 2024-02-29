import React from 'react';

const ThumbnailCarousel = ({ images, onClickThumbnail }) => {
  return (
    <div className='thumbnail-carousel'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          onClick={() => onClickThumbnail(index)}
        />
      ))}
    </div>
  );
};

export default ThumbnailCarousel;

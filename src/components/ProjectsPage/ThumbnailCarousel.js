import React from 'react';

const ThumbnailCarousel = ({ images, onClickThumbnail, selectedIndex }) => {
  return (
    <div className='thumbnail-carousel'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          onClick={() => onClickThumbnail(index)}
          className={index === selectedIndex ? 'thumbnail-active' : ''}
        />
      ))}
    </div>
  );
};

export default ThumbnailCarousel;

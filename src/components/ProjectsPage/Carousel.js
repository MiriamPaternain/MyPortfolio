import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyStore from '../../img/My-store.png';
import TheGreenCoffe from '../../img/greenCoffe.png';
import DoLister from '../../img/Do Lister.png';
import ThumbnailCarousel from './ThumbnailCarousel';
class Carousel extends React.Component {
  render() {
    const images = [MyStore, TheGreenCoffe, DoLister];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Img ${index}`} />
            </div>
          ))}
        </Slider>
        <ThumbnailCarousel images={images} />
      </div>
    );
  }
}

export default Carousel;

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyStore from '../../img/My-store.png';
import TheGreenCoffe from '../../img/greenCoffe.png';
import DoLister from '../../img/Do Lister.png';
import ThumbnailCarousel from './ThumbnailCarousel';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleThumbnailClick = (index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const images = [MyStore, TheGreenCoffe, DoLister];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (index) => this.setState({ selectedIndex: index }),
    };

    return (
      <div className='carouselContainer'>
        <Slider {...settings} className='carouselContainer_slider'>
          {images.map((image, index) => (
            <div key={index} className='carouselContainer_slider--slide'>
              <img
                src={image}
                alt={`Img ${index}`}
                className='carouselContainer_slider--img'
              />
            </div>
          ))}
        </Slider>
        <ThumbnailCarousel
          images={images}
          onClickThumbnail={this.handleThumbnailClick}
        />{' '}
      </div>
    );
  }
}

export default Carousel;

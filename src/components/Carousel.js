import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyStore from '../img/My-store.png';
import TheGreenCoffe from '../img/greenCoffe.png';
import DoLister from '../img/Do Lister.png';

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        <div>
          <img src={MyStore} alt='Img from project' />
        </div>
        <div>
          <img src={TheGreenCoffe} alt='Img from project' />
        </div>
        <div>
          <img src={DoLister} alt='Img from project' />
        </div>
        {/* Add more images as needed */}
      </Slider>
    );
  }
}

export default Carousel;

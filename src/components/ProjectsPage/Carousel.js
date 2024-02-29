import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyStore from '../../img/My-store.png';
import TheGreenCoffe from '../../img/greenCoffe.png';
import DoLister from '../../img/Do Lister.png';
import ThumbnailCarousel from './ThumbnailCarousel';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef();

  const images = [MyStore, TheGreenCoffe, DoLister];
  const projectNames = ['MyStore', 'TheGreenCoffe', 'DoLister'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedIndex(index),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
    carouselRef.current.slickGoTo(index);
  };

  return (
    <div className='carouselContainer'>
      <div className='carouselContainer_slider'>
        <Slider ref={carouselRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className='carouselContainer_slider--slide'>
              <Link
                to={`/Projects/${projectNames[index]}`}
                className='carouselContainer_slider--slide'>
                <img
                  src={image}
                  alt={`Img ${index}`}
                  className='carouselContainer_slider--img'
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <ThumbnailCarousel
        images={images}
        selectedIndex={selectedIndex}
        onClickThumbnail={handleThumbnailClick}
      />
    </div>
  );
};
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='custom-arrow custom-prev' onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='custom-arrow custom-next' onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};
export default Carousel;

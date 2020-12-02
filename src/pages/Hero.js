import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <h2>
          <span className='hero__color'>Feel taste</span> <br /> of the drink
        </h2>
        <p className='col-lg-4 col-sm-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem
          accusamus veritatis in numquam, placeat perferendis odit voluptatibus
          ab! Maxime reiciendis dicta, inventore quasi fugiat voluptatibus quis
          nobis nemo error.
        </p>
        <Link to='#' className='btn btn-dark btn-lg mb-sm-5'>
          Readmore
        </Link>
      </div>
    </div>
  );
};

export default Hero;

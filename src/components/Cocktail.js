import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Cocktail = ({ item: { id, name, image, info, glass } }) => {
  return (
    <div className='card'>
      <Link to={`/cocktail/${id}`}>
        <img src={image} className='card-img-top' alt={name} />
        <div className='card-body'>
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <button to={`/cocktail/${id}`} className='btn__link'>
            Read More <FaAngleDoubleRight />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Cocktail;

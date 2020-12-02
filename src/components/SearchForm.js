import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = useRef();
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className='card card-body m-4 col-md-8 mx-auto'>
      <h4 className='text-center mt-4 text-dark'>Find your favourite drinks</h4>
      <form className='mt-5 mb-5 col-md-8 mx-auto'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Search your favourite drinks here...'
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </div>
  );
};

export default SearchForm;

import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import Hero from './Hero';
import Img from '../image.png';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='container-fluid'>
        <SearchForm />
        <CocktailList />
      </div>
      <img src={Img} alt='' className='hero__shape' />
    </>
  );
};

export default Home;

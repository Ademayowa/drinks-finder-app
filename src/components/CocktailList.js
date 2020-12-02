import React from 'react';
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) return <Loading />;
  if (cocktails.length < 1) {
    return (
      <h2 className='text-center m-4'>
        There is no cocktails for this search criteria
      </h2>
    );
  }

  return (
    <div style={grid} className='cocktailList'>
      {cocktails.map((cocktail) => (
        <Cocktail key={cocktail.id} item={cocktail} />
      ))}
    </div>
  );
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
};
export default CocktailList;

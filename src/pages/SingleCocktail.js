import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    try {
      const fetchDrink = async () => {
        const { data } = await axios.get(`${url}${id}`);

        if (data.drinks) {
          const {
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strCategory,
            strGlass,
            strInstructions,
          } = data.drinks[0];

          const newCocktail = {
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strCategory,
            strGlass,
            strInstructions,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      };

      fetchDrink();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [id]);

  if (loading) return <Loading />;
  if (!cocktail) {
    return <h2>There is no cocktail available now</h2>;
  }

  const {
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strGlass,
    strInstructions,
  } = cocktail;

  return (
    <div className='card container col-md-5 mt-5 mb-5 card__color'>
      <Link to='/' className='p-3'>
        <FaAngleDoubleLeft /> Go back
      </Link>
      <img
        src={strDrinkThumb}
        style={{ objectFit: 'cover' }}
        alt={strDrinkThumb}
      />
      <div className='card-body'>
        <p>
          <span className='drink-data'>Name: </span>
          {strAlcoholic}
        </p>
        <p>
          <span className='drink-data'>Category: </span>
          {strCategory}
        </p>
        <p>
          <span className='drink-data'>Type: </span>
          {strAlcoholic}
        </p>
        <p>
          <span className='drink-data'>Glass: </span>
          {strGlass}
        </p>
        <p>
          <span className='drink-data'>Instructions: </span>
          {strInstructions}
        </p>
      </div>
    </div>
  );
};

export default SingleCocktail;

import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>Error</div>
      <h1>Error!</h1>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
    </section>
  );
};

export default Error;

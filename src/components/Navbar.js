import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>Drink Finder</Link>
        <ul className='nav-links'>
          <li>
            <Link className='nav-links' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='nav-links' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

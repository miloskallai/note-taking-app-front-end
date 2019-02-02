import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar-container'>

      <span className='logo'>notes</span>
      <input className='search-bar' type='text' placeholder='search' />
      <Link to='/new'>
        <span>
          <ion-icon
            className='add-circle-outline icon-link'
            name='add-circle-outline'
          />
        </span>
      </Link>

    </div>
  );
};

export default NavBar;

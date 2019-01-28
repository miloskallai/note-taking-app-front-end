import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar-container'>
      <div className='nav-bar'>
        <span className='logo'>notes</span>
        <Link to='/new'>
          <span>
            <ion-icon
              className='add-circle-outline'
              name='add-circle-outline'
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <ul>
        <li className='logo'>notes</li>
        <Link to='/'>
          <li>My Notes</li>
        </Link>
        <Link to='/new'>
          <li>New Note</li>
        </Link>
        <li>Shared Notes</li>
      </ul>
    </div>
  );
};

export default NavBar;

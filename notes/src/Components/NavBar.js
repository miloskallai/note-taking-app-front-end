import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js';

const NavBar = ({ handleFilter, filteredValue, startLogout }) => {
  return (
    <div className='nav-bar-container bg-light'>
      <Link className='link text-decoration-none text-dark' to='/'>
        <span className='logo'>notes</span>
      </Link>
      <button className='btn btn-outline-info mb-3' onClick={startLogout}>
        Logout
      </button>
      <input
        onChange={handleFilter}
        className='form-control form-control-lg'
        type='text'
        placeholder='search'
        value={filteredValue}
        id='filter'
      />
      <Link className='link text-decoration-none text-dark' to='/new'>
        <span>
          <ion-icon name='add' />
        </span>
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(NavBar);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {startLogout} from '../actions/auth.js';

const NavBar = ({ handleFilter, filteredValue, startLogout }) => {
	return (
		<div className='nav-bar-container'>
			<Link className='link' to='/'>
				<span className='logo'>notes</span>
			</Link>
			<button onClick={startLogout} >Logout</button>
			<input
				onChange={handleFilter}
				className='search-bar'
				type='text'
				placeholder='search'
				value={filteredValue}
				id='filter'
			/>
			<Link className='link' to='/new'>
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

export default connect(undefined, mapDispatchToProps)(NavBar);

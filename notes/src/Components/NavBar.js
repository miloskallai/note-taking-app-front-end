import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ handleFilter, filteredValue }) => {
	return (
		<div className='nav-bar-container'>
			<Link className='link' to='/'>
				<span className='logo'>notes</span>
			</Link>
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

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='nav-bar-container'>
			<span className='logo'>notes</span>
			<input className='search-bar' type='text' placeholder='search' />
			<Link className='link' to='/new'>
				<span>
					<ion-icon name='add' />
				</span>
			</Link>
		</div>
	);
};

export default NavBar;

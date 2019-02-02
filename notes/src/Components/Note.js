import React from 'react';

const Note = ({ title, noteText, date, handleDelete, handleEdit }) => {
	return (
		<div className='main-noteID-container'>
			<h3>{title}</h3>
			<p className='note-text'>{noteText}</p>
			<p>{date}</p>
			<div className='noteID-btn-container'>
				<span className='link icon-container'>
					<ion-icon name='trash' onClick={handleDelete} />{' '}
				</span>
				<span className='link icon-container'>
					<ion-icon className='icon-link' name='create' onClick={handleEdit} />
				</span>
			</div>
		</div>
	);
};

export default Note;

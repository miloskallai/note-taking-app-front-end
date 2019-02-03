import React from 'react';
import { Link } from 'react-router-dom';

const NotePreview = ({
	title,
	noteText,
	date,
	handleDelete,
	handleEdit,
	showNote,
	id
}) => {
	return (
		<div className='note-preview-container'>
			<h3 className='note-title'>{title}</h3>
			<p>
				{noteText !== undefined && noteText.length > 50
					? noteText.substring(0, 50) + '...'
					: noteText}
			</p>
			<p className='date-container'>{date}</p>
			<div className='note-preview-btn-container'>
				<span className='link icon-container'>
					<ion-icon name='trash' onClick={handleDelete} />
				</span>
				<span className='btn-action-container'>
					<Link className='edit link' to={`/notes/edit/${id}`}>
						<ion-icon name='create' onClick={handleEdit} />
					</Link>
					<Link className='link' to={`/note/${id}`}>
						<ion-icon name='eye' onClick={showNote} />
					</Link>
				</span>
			</div>
		</div>
	);
};

export default NotePreview;

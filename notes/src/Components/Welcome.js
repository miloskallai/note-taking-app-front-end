import React from 'react';

const Welcome = () => (
	<div className='welcome-container'>
		<div className='welcome-text-container'>
			<h1>Welcome to notes!</h1>
			<table className='action-table'>
				<tbody>
					<tr>
						<td>add note:</td>
						<td>
							<span className='welcon-icon-container'>
								<ion-icon name='add' />
							</span>
						</td>
					</tr>
					<tr>
						<td>view note:</td>
						<td>
							<span className='welcon-icon-container'>
								<ion-icon name='eye' />
							</span>
						</td>
					</tr>
					<tr>
						<td>edit note:</td>
						<td>
							<span className='welcon-icon-container'>
								<ion-icon name='create' />
							</span>
						</td>
					</tr>
					<tr>
						<td>delete note:</td>
						<td>
							<span className='welcon-icon-container'>
								<ion-icon name='trash' />
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
);

export default Welcome;

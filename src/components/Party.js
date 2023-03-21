import React from 'react';

const Party = ({ onSubmit }) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='char-num'>Characters (Max 10)</label>
				<input type='number' id='char-num' min='1' max='10' />
				<label htmlFor='level'>Level (1-20)</label>
				<input type='number' id='level' min='1' max='20' />
				<button name='partySubmit' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Party;

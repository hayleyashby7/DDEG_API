import React from 'react';
import {useState} from 'react'

const Party = ({ onSubmit }) => {

	const [numCharacters, setNumCharacters] = useState(1);
	const [level, setLevel] = useState(1);

	return (		
			<form onSubmit={ onSubmit }>
				<label htmlFor='numCharacters'>Number of characters (Max 10)</label>
				<input name= 'numCharacters' placeholder='Number of characters (Max 10)'type='number' id='numCharacters' min='1' max='10' value={numCharacters} onChange={(e)=> setNumCharacters(e.target.value)} />
				<label htmlFor='level'>Level (1-20)</label>
				<input name='level' placeholder='Level (1-20)' type='number' id='level' min='1' max='20' value={level} onChange={(e)=> setLevel(e.target.value)}/>
				<button name='partySubmit' type='submit'>
					Submit
				</button>
			</form>	
	);
};

export default Party;

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { difficultyEnum } from './utilities/difficulty';

const Party = ({ handleForm }) => {
	const { register, handleSubmit } = useForm();
	const [numCharacters, setNumCharacters] = useState(1);
	const [level, setLevel] = useState(1);
	const [difficulty, setDifficulty] = useState(difficultyEnum.Easy);

	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
			})}
		>
			<label htmlFor='numCharacters'>Number of characters</label>
			<input
				id='numCharacters'
				type='number'
				{...register('numCharacters', {
					required: true,
					min: 1,
					max: 10,
					valueAsNumber: true,
					value: { numCharacters },
					onChange: (e) => setNumCharacters(e.target.value),
				})}
				placeholder='1-10'
			/>
			<label htmlFor='level'>Level (1-20)</label>
			<input
				id='level'
				type='number'
				{...register('level', {
					required: true,
					min: 1,
					max: 12,
					valueAsNumber: true,
					value: { level },
					onChange: (e) => setLevel(e.target.value),
				})}
				placeholder='1-20'
			/>
			<label htmlFor='difficulty'>Difficulty</label>
			<select
				id='difficulty'
				{...register('difficulty', {
					required: true,
					value: { difficulty },
					onChange: (e) => setDifficulty(e.target.value),
				})}
			>
				<option value={difficultyEnum.Easy.toString()}>Easy</option>
				<option value={difficultyEnum.Medium.toString()}>Medium</option>
				<option value={difficultyEnum.Hard.toString()}>Hard</option>
				<option value={difficultyEnum.Deadly.toString()}>Deadly</option>
			</select>

			<input name='partySubmit' type='submit' />
		</form>
	);
};

export default Party;

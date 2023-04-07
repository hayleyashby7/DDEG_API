import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Difficulty from '../utils/difficulty';
import { Input, Select } from './Form';

function Party({ saveData }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        saveData(data);
    };

    const difficultyArray = [
        { value: null, label: 'Select a difficulty' },
        { value: Difficulty.Easy, label: 'Easy' },
        { value: Difficulty.Medium, label: 'Medium' },
        { value: Difficulty.Hard, label: 'Hard' },
        { value: Difficulty.Deadly, label: 'Deadly' },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Number of characters'
                name='numCharacters'
                type='number'
                register={register}
                required
                max={10}
                min={1}
                valueAsNumber
            />
            {errors.numCharacters && <p>Must be between 1-10</p>}

            <Input
                label='Level'
                name='level'
                type='number'
                register={register}
                required
                min={1}
                max={20}
                valueAsNumber
            />
            {errors.level && <p>Must be between 1-20</p>}

            <Select
                label='Difficulty'
                name='difficulty'
                options={difficultyArray}
                register={register}
                required
                validate={(value) => Difficulty.difficultyType(value)}
            />

            {errors.difficulty && <p>Must select a difficulty</p>}

            <input name='partySubmit' type='submit' />
        </form>
    );
}

Party.propTypes = { saveData: PropTypes.func };
Party.defaultProps = { saveData: () => {} };

export default Party;

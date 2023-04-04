import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Difficulty from '../utils/difficulty';

function Party({ saveData }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        saveData(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='numCharacters' aria-labelledby='numCharacters'>
                Number of characters
                <input
                    id='numCharacters'
                    type='number'
                    placeholder='1-10'
                    {...register('numCharacters', {
                        required: true,
                        max: 10,
                        min: 1,
                        valueAsNumber: true,
                    })}
                />
            </label>
            {errors.numCharacters && <p>Must be between 1-10</p>}

            <label htmlFor='level' aria-labelledby='level'>
                Level
                <input
                    id='level'
                    type='number'
                    placeholder='1-20'
                    {...register('level', {
                        required: true,
                        min: 1,
                        max: 20,
                        valueAsNumber: true,
                    })}
                />
            </label>
            {errors.level && <p>Must be between 1-20</p>}

            <label htmlFor='difficulty' aria-labelledby='difficulty'>
                Difficulty
                <select
                    id='difficulty'
                    {...register('difficulty', {
                        required: true,
                    })}
                >
                    {' '}
                    <option value={Difficulty.Easy}>Easy</option>
                    <option value={Difficulty.Medium}>Medium</option>
                    <option value={Difficulty.Hard}>Hard</option>
                    <option value={Difficulty.Deadly}>Deadly</option>
                </select>
            </label>

            <input name='partySubmit' type='submit' />
        </form>
    );
}

Party.propTypes = { saveData: PropTypes.func };
Party.defaultProps = { saveData: () => {} };

export default Party;

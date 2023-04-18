import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Difficulty from '../../utils/difficulty';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Button from '../Form/Button';

function Party({ saveData }) {
    const {
        register,
        formState: { errors },
        handleSubmit,
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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='my-5 flex flex-col flex-wrap justify-end gap-4 rounded bg-stone-400/50 p-5 text-red-950 lg:flex-row lg:justify-between'
        >
            <div className='flex flex-1 flex-col'>
                <Input
                    label='Number of characters'
                    name='numCharacters'
                    type='number'
                    register={register}
                    required='Required'
                    valueAsNumber='Must be a number'
                    max={{
                        value: 10,
                        message: 'Max 10',
                    }}
                    min={{
                        value: 1,
                        message: 'Min 1',
                    }}
                />
                <ErrorMessage
                    errors={errors}
                    name='numCharacters'
                    render={({ message }) => <p>{message}</p>}
                />
            </div>

            <div className='flex flex-1 flex-col'>
                <Input
                    label='Level'
                    name='level'
                    type='number'
                    register={register}
                    required='Required'
                    valueAsNumber='Must be a number'
                    max={{
                        value: 20,
                        message: 'Max 20',
                    }}
                    min={{
                        value: 1,
                        message: 'Min 1',
                    }}
                />
                <ErrorMessage
                    errors={errors}
                    name='level'
                    render={({ message }) => <p>{message}</p>}
                />
            </div>
            <div className='flex flex-1 flex-col'>
                <Select
                    label='Difficulty'
                    name='difficulty'
                    options={difficultyArray}
                    register={register}
                    required
                    validate={(value) =>
                        Difficulty.difficultyType(value) || 'Must select a difficulty'
                    }
                />
                <ErrorMessage
                    errors={errors}
                    name='difficulty'
                    render={({ message }) => <p>{message}</p>}
                />
            </div>
            <div className='flex flex-1 flex-col justify-end'>
                <Button label='Generate' type='submit' name='generate' />
            </div>
        </form>
    );
}

Party.propTypes = { saveData: PropTypes.func };
Party.defaultProps = { saveData: () => {} };

export default Party;

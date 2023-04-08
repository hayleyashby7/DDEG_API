/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export function Input({ label, name, type, register, ...rest }) {
    return (
        <label className='flex flex-1 flex-col' htmlFor={name} aria-labelledby={name}>
            {label}
            <input
                className='border-2 border-solid border-neutral-900 bg-orange-100 outline-none'
                id={name}
                type={type}
                {...register(name, { ...rest })}
            />
        </label>
    );
}

export function Select({ label, name, options, register, ...rest }) {
    return (
        <label className='flex flex-1 flex-col' htmlFor={name} aria-labelledby={name}>
            {label}
            <select
                className='border-2 border-solid border-neutral-900 bg-orange-100 outline-none'
                id={name}
                defaultValue={options[0].value}
                {...register(name, { ...rest })}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    register: PropTypes.func,
    rest: PropTypes.object,
};
Input.defaultProps = {
    label: '',
    name: '',
    type: '',
    register: () => {},
    rest: {},
};

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    register: PropTypes.func,
    rest: PropTypes.object,
};
Select.defaultProps = {
    label: '',
    name: '',
    options: [],
    register: () => {},
    rest: {},
};

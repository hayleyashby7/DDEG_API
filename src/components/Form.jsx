/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export function Input({ label, name, type, register, ...rest }) {
    return (
        <label htmlFor={name} aria-labelledby={name}>
            {label}
            <input id={name} type={type} {...register(name, { ...rest })} />
        </label>
    );
}

export function Select({ label, register, name, options, ...rest }) {
    return (
        <label htmlFor={name} aria-labelledby={name}>
            {label}
            <select id={name} defaultValue={options[0].value} {...register(name, { ...rest })}>
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
Input.defaultProps = { label: '', name: '', type: '', register: () => {}, rest: {} };

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
    options: PropTypes.array,
    rest: PropTypes.object,
};
Select.defaultProps = { label: '', name: '', register: () => {}, options: [], rest: {} };

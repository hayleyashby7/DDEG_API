/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, name, type, register, ...rest }) {
    return (
        <label className='flex flex-1 flex-col' htmlFor={name} aria-labelledby={name}>
            {label}
            <input
                onChange={rest.onChange}
                className='border-2 border-solid border-neutral-900 bg-orange-100 outline-none'
                id={name}
                type={type}
                {...register(name, { ...rest })}
            />
        </label>
    );
}

export default Input;

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

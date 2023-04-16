/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Select({ label, name, options, register, ...rest }) {
    return (
        <label className='flex flex-1 flex-col' htmlFor={name} aria-labelledby={name}>
            {label}
            <select
                className='form-select solid rounded  border-2 border-neutral-900 bg-orange-100 px-2 py-1 outline-none'
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

export default Select;

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    register: PropTypes.func,
    rest: PropTypes.object,
};

Select.defaultProps = {
    label: '',
    name: '',
    register: () => {},
    rest: {},
};

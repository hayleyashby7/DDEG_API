/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, type, ...rest }) {
    return (
        <button
            onClick={rest.onClick}
            type={type}
            className="rounded-lg border-2 border-solid border-orange-100 bg-red-950 p-2 font-['Alegreya_Sans'] text-orange-100 hover:bg-red-900 hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-red-900/50"
            {...rest}
        >
            {label}
        </button>
    );
}

export default Button;

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    rest: PropTypes.object,
};
Button.defaultProps = {
    label: '',
    type: 'button',
    rest: {},
};

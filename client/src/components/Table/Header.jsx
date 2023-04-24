import React from 'react';
import PropTypes from 'prop-types';

function Header({ header }) {
    return (
        <th key={header} className={header.important ? 'table-cell' : 'hidden md:table-cell'}>
            {header.name}
        </th>
    );
}

Header.propTypes = {
    header: PropTypes.shape({
        name: PropTypes.string.isRequired,
        important: PropTypes.bool.isRequired,
    }).isRequired,
};

export default Header;

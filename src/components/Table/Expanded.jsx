/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Monster from '../Monster/Monster';

function Expanded({ data, colSpan }) {
    return (
        <tr>
            <td colSpan={colSpan}>
                <Monster data={data} />
            </td>
        </tr>
    );
}

Expanded.propTypes = {
    data: PropTypes.object.isRequired,
    colSpan: PropTypes.number.isRequired,
};

export default Expanded;

/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Expanded from './Expanded';

function Row({ data, cols }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.challenge_rating}</td>
                <td>{data.type}</td>
                <td>{data.size}</td>
                <td>{data.alignment}</td>
                <td>
                    <div>
                        <FontAwesomeIcon
                            icon={isExpanded ? faMinus : faPlus}
                            onClick={handleExpand}
                            title='Expand'
                        />
                    </div>
                </td>
            </tr>
            {isExpanded && <Expanded data={data} colSpan={cols} />}
        </>
    );
}

Row.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        challenge_rating: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        alignment: PropTypes.string.isRequired,
    }).isRequired,
    cols: PropTypes.number.isRequired,
};

export default Row;

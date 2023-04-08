import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Expanded from './Expanded';

function Row({ data }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <tr onClick={handleExpand}>
                <td>{data.name}</td>
                <td>{data.challenge_rating}</td>
                <td>{data.type}</td>
                <td>{data.size}</td>
                <td>{data.alignment}</td>
            </tr>
            {isExpanded ? <Expanded /> : null}
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
};

export default Row;

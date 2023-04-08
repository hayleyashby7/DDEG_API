import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

function Row({ rowKey, data }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Fragment key={rowKey}>
            <tr onClick={handleExpand}>
                <td>{data.name}</td>
                <td>{data.challenge_rating}</td>
                <td>{data.type}</td>
                <td>{data.size}</td>
                <td>{data.alignment}</td>
            </tr>
            {isExpanded ? (
                <tr>
                    <td>Expanded</td>
                </tr>
            ) : null}
        </Fragment>
    );
}

Row.propTypes = {
    rowKey: PropTypes.string.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        challenge_rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        alignment: PropTypes.string.isRequired,
    }).isRequired,
};

export default Row;

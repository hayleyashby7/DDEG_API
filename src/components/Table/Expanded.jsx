import React from 'react';
import PropTypes from 'prop-types';

function Expanded({ data }) {
    return (
        <tr>
            <td>
                <div className='bg-orange-100 text-red-950'>
                    <h2>{data.name}</h2>

                    <p>{data.challenge_rating}</p>
                    <p>{data.type}</p>
                    <p>{data.size}</p>
                    <p>{data.alignment}</p>
                </div>
            </td>
        </tr>
    );
}

Expanded.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        challenge_rating: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        alignment: PropTypes.string.isRequired,
    }).isRequired,
};

export default Expanded;

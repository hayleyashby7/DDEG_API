/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function BaseInfo({ data }) {
    return (
        <section id='base-info'>
            <h2 className='text-2xl font-extrabold'>{data.name}</h2>
            <p className='italic'>
                {data.size} {data.type}, {data.alignment}{' '}
            </p>
            <hr />
            <p>
                <span className='font-semibold'> Armor Class</span> {data.armor_class}
                {data.armor_desc !== '' && <span> ({data.armor_desc})</span>}
            </p>
            <p>
                <span className='font-semibold'>Hit Points</span> {data.hit_points}
                {data.hit_dice !== '' && <span> ({data.hit_dice})</span>}
            </p>
            <p>
                <span className='font-semibold'>Speed</span>
                {Object.keys(data.speed).map((speed) => (
                    <span key={speed}>
                        {' '}
                        {speed} {data.speed[speed]}ft
                    </span>
                ))}
            </p>
        </section>
    );
}

BaseInfo.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        alignment: PropTypes.string.isRequired,
        armor_class: PropTypes.number.isRequired,
        armor_desc: PropTypes.string,
        hit_points: PropTypes.number.isRequired,
        hit_dice: PropTypes.string,
        speed: PropTypes.object.isRequired,
    }).isRequired,
};

export default BaseInfo;

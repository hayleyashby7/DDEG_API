import React from 'react';
import PropTypes from 'prop-types';

function Special({ data }) {
    return (
        <section id='special'>
            <hr />
            <h3 className='font-bold'>Special Abilities</h3>

            <div className='text-neutral-900'>
                {data.special_abilities.map((ability) => (
                    <div key={ability.name}>
                        <h4 className='font-bold'>{ability.name}</h4>
                        <p>{ability.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

Special.propTypes = {
    data: PropTypes.shape({
        special_abilities: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    }).isRequired,
};

export default Special;

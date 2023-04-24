import React from 'react';
import PropTypes from 'prop-types';

function LegendaryActions({ data }) {
    return (
        <section id='legendary'>
            <hr />
            <h3 className='font-bold'>Legendary Actions</h3>
            <div className='text-neutral-900'>
                {data.legendary_actions.map((action) => (
                    <div key={action.name}>
                        <h4 className='font-bold'>{action.name}</h4>
                        <p>{action.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

LegendaryActions.propTypes = {
    data: PropTypes.shape({
        legendary_actions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    }).isRequired,
};

export default LegendaryActions;

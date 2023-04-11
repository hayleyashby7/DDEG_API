import React from 'react';
import PropTypes from 'prop-types';

function Actions({ data }) {
    return (
        <section id='actions'>
            <hr />
            <h3 className='font-bold'>Actions</h3>
            <div className='text-neutral-900'>
                {data.actions.map((action) => (
                    <div key={action.name}>
                        <h4 className='font-bold'>{action.name}</h4>
                        <p>{action.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

Actions.propTypes = {
    data: PropTypes.shape({
        actions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    }).isRequired,
};

export default Actions;

import React from 'react';
import PropTypes from 'prop-types';

function Stats({ data }) {
    return (
        <section id='stats'>
            <hr />
            <div className='flex justify-evenly'>
                <div>
                    <h4 className='font-bold'>STR</h4>
                    <p>{data.strength}</p>
                </div>
                <div>
                    <h4 className='font-bold'>DEX</h4>
                    <p>{data.dexterity}</p>
                </div>
                <div>
                    <h4 className='font-bold'>CON</h4>
                    <p>{data.constitution}</p>
                </div>
                <div>
                    <h4 className='font-bold'>INT</h4>
                    <p>{data.intelligence}</p>
                </div>
                <div>
                    <h4 className='font-bold'>WIS</h4>
                    <p>{data.wisdom}</p>
                </div>
                <div>
                    <h4 className='font-bold'>CHA</h4>
                    <p>{data.charisma}</p>
                </div>
            </div>
        </section>
    );
}

Stats.propTypes = {
    data: PropTypes.shape({
        strength: PropTypes.number.isRequired,
        dexterity: PropTypes.number.isRequired,
        constitution: PropTypes.number.isRequired,
        intelligence: PropTypes.number.isRequired,
        wisdom: PropTypes.number.isRequired,
        charisma: PropTypes.number.isRequired,
    }).isRequired,
};

export default Stats;

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { formatString } from '../../utils/dataUtils';

function Attributes({ data }) {
    const checkSaves = () => {
        if (
            data.strength_save == null &&
            data.dexterity_save == null &&
            data.constitution_save == null &&
            data.intelligence_save == null &&
            data.wisdom_save == null &&
            data.charisma_save == null
        ) {
            return false;
        }
        return true;
    };

    const hasSavingThrows = checkSaves();

    return (
        <section id='attributes'>
            <hr />
            {hasSavingThrows && (
                <p>
                    <span className='font-semibold'>Saving Throws</span>
                    {data.strength_save !== null && <span> STR +{data.strength_save}</span>}
                    {data.dexterity_save !== null && <span> DEX +{data.dexterity_save}</span>}
                    {data.constitution_save !== null && <span> CON +{data.constitution_save}</span>}
                    {data.intelligence_save !== null && <span> INT +{data.intelligence_save}</span>}
                    {data.wisdom_save !== null && <span> WIS +{data.wisdom_save}</span>}
                    {data.charisma_save !== null && <span> CHA +{data.charisma_save}</span>}
                </p>
            )}
            {Object.keys(data.skills).length > 0 && (
                <p>
                    <span className='font-semibold'>Skills </span>
                    {Object.keys(data.skills).map((skill) => (
                        <span key={skill}>
                            {formatString(skill)} +{data.skills[skill]}{' '}
                        </span>
                    ))}
                </p>
            )}
            {data.damage_vulnerabilities !== null && data.damage_vulnerabilities !== '' && (
                <p>
                    <span className='font-semibold'>Damage Vulnerabilities</span>{' '}
                    {formatString(data.damage_vulnerabilities)}
                </p>
            )}
            {data.damage_resistances !== null && data.damage_resistances !== '' && (
                <p>
                    <span className='font-semibold'>Damage Resistances</span>{' '}
                    {formatString(data.damage_resistances)}
                </p>
            )}
            {data.damage_immunities !== null && data.damage_immunities !== '' && (
                <p>
                    <span className='font-semibold'>Damage Immunities</span>{' '}
                    {formatString(data.damage_immunities)}
                </p>
            )}
            {data.condition_immunities !== null && data.condition_immunities !== '' && (
                <p>
                    <span className='font-semibold'>Condition Immunities</span>{' '}
                    {formatString(data.condition_immunities)}
                </p>
            )}

            {data.senses !== null && data.senses !== '' && (
                <p>
                    <span className='font-semibold'>Senses</span> {data.senses}
                </p>
            )}
            {data.languages !== null && data.languages !== '' && (
                <p>
                    <span className='font-semibold'>Languages </span> {data.languages}
                </p>
            )}
            {data.challenge_rating !== null && data.challenge_rating !== '' && (
                <p>
                    <span className='font-semibold'>Challenge</span> {data.challenge_rating}
                </p>
            )}
        </section>
    );
}

Attributes.propTypes = {
    data: PropTypes.shape({
        challenge_rating: PropTypes.string,
        strength_save: PropTypes.number,
        dexterity_save: PropTypes.number,
        constitution_save: PropTypes.number,
        intelligence_save: PropTypes.number,
        wisdom_save: PropTypes.number,
        charisma_save: PropTypes.number,
        skills: PropTypes.object.isRequired,
        damage_vulnerabilities: PropTypes.string,
        damage_resistances: PropTypes.string,
        damage_immunities: PropTypes.string,
        condition_immunities: PropTypes.string,
        senses: PropTypes.string.isRequired,
        languages: PropTypes.string.isRequired,
    }).isRequired,
};

export default Attributes;

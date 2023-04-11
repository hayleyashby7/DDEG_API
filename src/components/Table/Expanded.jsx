/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Expanded({ data, colSpan }) {
    return (
        <tr>
            <td colSpan={colSpan}>
                <div className='grid grid-flow-dense gap-5 bg-orange-100 text-red-950'>
                    <section id='base-info'>
                        <h2 className='text-2xl font-extrabold'>{data.name}</h2>
                        <p className='italic'>
                            {data.size} {data.type}, {data.alignment}{' '}
                        </p>
                        <hr />
                        <p>
                            <span className='font-semibold'> Armor Class</span> {data.armor_class}
                            {data.armor_desc !== '' ?? <span> ({data.armor_desc})</span>}
                        </p>
                        <p>
                            <span className='font-semibold'>Hit Points</span> {data.hit_points}
                            {data.hit_dice !== '' ?? <span> ({data.hit_dice})</span>}
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
                    <section id='attributes'>
                        <hr />
                        {data.strength_save !== null ||
                            data.dexterity_save !== null ||
                            data.constitution_save !== null ||
                            data.intelligence_save !== null ||
                            data.wisdom_save !== null ||
                            (data.charisma_save !== null && (
                                <p>
                                    <span className='font-semibold'>Saving Throws</span>
                                    {data.strength_save !== null && (
                                        <span> STR +{data.strength_save}</span>
                                    )}
                                    {data.dexterity_save !== null && (
                                        <span> DEX +{data.dexterity_save}</span>
                                    )}
                                    {data.constitution_save !== null && (
                                        <span> CON +{data.constitution_save}</span>
                                    )}
                                    {data.intelligence_save !== null && (
                                        <span> INT +{data.intelligence_save}</span>
                                    )}
                                    {data.wisdom_save !== null && (
                                        <span> WIS +{data.wisdom_save}</span>
                                    )}
                                    {data.charisma_save !== null && (
                                        <span> CHA +{data.charisma_save}</span>
                                    )}
                                </p>
                            ))}
                        {Object.keys(data.skills).length > 0 && (
                            <p>
                                <span className='font-semibold'>Skills </span>
                                {Object.keys(data.skills).map((skill) => (
                                    <span key={skill}>
                                        {skill} +{data.skills[skill]}{' '}
                                    </span>
                                ))}
                            </p>
                        )}
                        {data.damage_vulnerabilities !== null &&
                            data.damage_vulnerabilities !== '' && (
                                <p>
                                    <span className='font-semibold'>Damage Vulnerabilities</span>{' '}
                                    {data.damage_vulnerabilities}
                                </p>
                            )}
                        {data.damage_resistances !== null && data.damage_resistances !== '' && (
                            <p>
                                <span className='font-semibold'>Damage Resistances</span>{' '}
                                {data.damage_resistances}
                            </p>
                        )}
                        {data.damage_immunities !== null && data.damage_immunities !== '' && (
                            <p>
                                <span className='font-semibold'>Damage Immunities</span>{' '}
                                {data.damage_immunities}
                            </p>
                        )}
                        {data.condition_immunities !== null && data.condition_immunities !== '' && (
                            <p>
                                <span className='font-semibold'>Condition Immunities</span>{' '}
                                {data.condition_immunities}
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
                                <span className='font-semibold'>Challenge</span>{' '}
                                {data.challenge_rating}
                            </p>
                        )}
                    </section>
                    {data.special_abilities !== null && data.special_abilities !== '' && (
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
                    )}
                    {data.actions !== null && data.actions !== '' && (
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
                    )}
                    {data.legendary_actions !== null && data.legendary_actions !== '' && (
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
                    )}
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
        armor_class: PropTypes.number.isRequired,
        armor_desc: PropTypes.string.isRequired,
        hit_points: PropTypes.number.isRequired,
        hit_dice: PropTypes.string.isRequired,
        speed: PropTypes.object.isRequired,
        strength: PropTypes.number.isRequired,
        dexterity: PropTypes.number.isRequired,
        constitution: PropTypes.number.isRequired,
        intelligence: PropTypes.number.isRequired,
        wisdom: PropTypes.number.isRequired,
        charisma: PropTypes.number.isRequired,
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
        special_abilities: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
        actions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        legendary_actions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    }).isRequired,
    colSpan: PropTypes.number.isRequired,
};

export default Expanded;

import React from 'react';
import PropTypes from 'prop-types';

function Expanded({ data, colSpan }) {
    return (
        <tr>
            <td colSpan={colSpan}>
                <div className='grid grid-flow-dense gap-5 bg-orange-100 text-red-950'>
                    <section>
                        <h2 className='text-2xl font-extrabold'>{data.name}</h2>
                        <p className='italic'>
                            {data.size} {data.type}, {data.alignment} {colSpan}
                        </p>
                        <hr />
                        <p>Armor Class {data.armor_class}</p>
                        <p>Hit Points {data.hit_points}</p>
                        <p>Speed</p>
                    </section>
                    <section>
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
                    <section>
                        <hr />
                        <p className='font-semibold'>Saving Throws {data.saving_throws}</p>
                        <p>SKILLS </p>
                        <p className='font-semibold'>Senses {data.senses}</p>
                        <p className='font-semibold'>Languages {data.languages}</p>
                        <p className='font-semibold'>Challenge {data.challenge_rating}</p>
                        <hr />
                        <h3>Special Abilities</h3>
                        <p className='text-neutral-900'>
                            Aenean massa lorem, bibendum eu condimentum in, bibendum sit amet felis.
                            Vestibulum luctus enim vehicula, egestas urna eu, porttitor felis. Nulla
                            id neque massa. Vestibulum dignissim ipsum ultricies luctus faucibus.
                            Praesent varius, lacus vitae malesuada volutpat, ipsum leo commodo ex,
                            eget pulvinar lorem odio sit amet urna. Sed imperdiet tempus nisl id
                            mollis. Integer ac dictum sem, ut fermentum leo. Suspendisse iaculis
                            posuere est vel volutpat. Integer placerat, mauris a sodales vehicula,
                            erat diam mollis ante, sed posuere ipsum mi quis ligula. Aliquam vel
                            venenatis nisl. Nam iaculis vestibulum dolor a pulvinar. Vestibulum enim
                            neque, luctus eu ligula id, convallis vulputate metus.{' '}
                        </p>
                    </section>
                    <section>
                        <hr />
                        <h3>Actions</h3>
                        <p>
                            ACTIONS. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse a lacus ac enim convallis semper ut commodo magna.
                            Suspendisse potenti. Pellentesque eu auctor enim. Integer sed nibh
                            turpis. Mauris luctus maximus consectetur. Donec semper porttitor diam
                            id varius. Mauris vel sapien a augue luctus placerat.{' '}
                        </p>
                    </section>

                    <section>
                        <hr />
                        <h3>Legendary Actions</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a
                            lacus ac enim convallis semper ut commodo magna. Suspendisse potenti.
                            Pellentesque eu auctor enim. Integer sed nibh turpis. Mauris luctus
                            maximus consectetur. Donec semper porttitor diam id varius. Mauris vel
                            sapien a augue luctus placerat. Aliquam blandit elit consequat ipsum
                            maximus interdum. Aenean cursus viverra orci, vitae molestie felis
                            congue sed. Aliquam a purus ut sem congue aliquam. Nulla facilisi. Orci
                            varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Suspendisse potenti. Sed ac nisi felis. Vivamus
                            sollicitudin mollis enim. Nunc quis leo vestibulum, varius erat a,
                            tincidunt urna. Praesent vulputate cursus orci eget finibus. Quisque ac
                            lobortis lorem, eu posuere metus. Sed molestie augue nisl, at accumsan
                            diam ultrices sed. Quisque dictum interdum dolor vel ultrices. Phasellus
                            justo augue, varius nec mollis vel, ornare vel diam. Duis eget sem non
                            mauris elementum maximus ac ut libero. Vivamus vehicula enim vel ipsum
                            venenatis, ac auctor nisi vestibulum. Cras sed felis sit amet libero
                            viverra faucibus. Quisque a viverra nisi. Morbi sit amet eros lorem.
                            Duis molestie ultricies erat, vel interdum eros. Mauris maximus mauris
                            eu imperdiet volutpat. Quisque orci velit, fermentum at ex et, maximus
                            scelerisque sapien. Quisque dictum pellentesque tempor. Ut sit amet
                            tortor eros. Nullam vitae justo et orci viverra porttitor. Curabitur nec
                            commodo nulla, eu volutpat nibh. Morbi sed turpis imperdiet, lacinia
                            diam vitae, varius nisi.
                        </p>
                    </section>
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
        hit_points: PropTypes.number.isRequired,
        speed: PropTypes.string.isRequired,
        strength: PropTypes.string.isRequired,
        dexterity: PropTypes.string.isRequired,
        constitution: PropTypes.string.isRequired,
        intelligence: PropTypes.string.isRequired,
        wisdom: PropTypes.string.isRequired,
        charisma: PropTypes.string.isRequired,
        saving_throws: PropTypes.number.isRequired,
        skills: PropTypes.string.isRequired,
        senses: PropTypes.string.isRequired,
        languages: PropTypes.string.isRequired,
        special_abilities: PropTypes.string.isRequired,
        actions: PropTypes.string.isRequired,
        legendary_actions: PropTypes.string.isRequired,
    }).isRequired,
    colSpan: PropTypes.number.isRequired,
};

export default Expanded;

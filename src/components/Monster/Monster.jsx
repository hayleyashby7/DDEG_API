/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BaseInfo from './BaseInfo';
import Stats from './Stats';
import Attributes from './Attributes';
import Special from './Special';
import Actions from './Actions';
import LegendaryActions from './LegendaryActions';

function Monster({ data }) {
    return (
        <div className='grid grid-flow-row gap-5 bg-orange-100 text-red-950'>
            <BaseInfo data={data} />
            <Stats data={data} />
            <Attributes data={data} />
            {data.special_abilities && <Special data={data} />}
            {data.actions && <Actions data={data} />}
            {data.legendary_actions && <LegendaryActions data={data} />}
        </div>
    );
}

Monster.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Monster;

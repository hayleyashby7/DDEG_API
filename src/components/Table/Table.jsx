/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Header from './Header';

function Table({ headers, data }) {
    return (
        <table className='table w-full border-separate text-left'>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <Header key={header.name} header={header} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <Row key={item.slug} data={item} cols={headers.length} />
                ))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};

export default Table;

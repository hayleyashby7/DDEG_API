/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

function Table({ headers, data }) {
    const [columns, setColumns] = useState(0);

    useEffect(() => {
        setColumns(headers.length);
    }, [headers]);

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <Row key={item.slug} data={item} cols={columns} />
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

import { DataTypes } from 'sequelize';

import db from '../services/db.js';

export default db.define(
    'type',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize: db,
        modelName: 'Type',
        timestamps: false,
    },
);

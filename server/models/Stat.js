import { DataTypes } from 'sequelize';

import db from '../services/db.js';

export default db.define(
    'stat',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize: db,
        modelName: 'Stat',
        timestamps: false,
    },
);

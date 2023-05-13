import { DataTypes } from 'sequelize';

import db from '../services/db.js';

export default db.define(
    'size',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        size: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize: db,
        modelName: 'Size',
        timestamps: false,
    },
);

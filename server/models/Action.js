import { DataTypes } from 'sequelize';

import db from '../services/db.js';

export default db.define(
    'action',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        monster_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        legendary: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
        sequelize: db,
        modelName: 'Action',
        timestamps: false,
    },
);

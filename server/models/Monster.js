import { DataTypes, Sequelize } from 'sequelize';

import db from '../services/db.js';

export default db.define(
    'monster',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        size_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'size', key: 'id' },
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'type', key: 'id' },
        },
        alignment: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'alignment', key: 'id' },
        },
        armor_class: { type: DataTypes.INTEGER, allowNull: false },
        armor_desc: { type: DataTypes.STRING, allowNull: false },
        hit_points: { type: DataTypes.INTEGER, allowNull: false },
        hit_dice: { type: DataTypes.STRING, allowNull: false },
        speed_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'speed', key: 'id' },
        },
    },
    {
        sequelize: db,
        modelName: 'Monster',
        timestamps: false,
    },
);

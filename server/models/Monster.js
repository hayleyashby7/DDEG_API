import { DataTypes } from 'sequelize';

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
        sizeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'size_id',
            references: {
                model: 'sizes',
                key: 'id',
            },
        },
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'type_id',
            references: {
                model: 'types',
                key: 'id',
            },
        },
        alignment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        armor_class: { type: DataTypes.INTEGER, allowNull: false },
        armor_desc: { type: DataTypes.STRING, allowNull: false },
        challenge_rating: { type: DataTypes.DOUBLE, allowNull: false },
        hit_points: { type: DataTypes.INTEGER, allowNull: false },
        hit_dice: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize: db,
        modelName: 'Monster',
        timestamps: false,
    },
);

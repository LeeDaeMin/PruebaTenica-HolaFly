'use strict';

module.exports = (sequelize, DataTypes) => {
    const logging = sequelize.define(
        'logging',{
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            action: DataTypes.STRING,
            header: DataTypes.STRING,
            ip: DataTypes.STRING,
        }
    );
    return logging;
};
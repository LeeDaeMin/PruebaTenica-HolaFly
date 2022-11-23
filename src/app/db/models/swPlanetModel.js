'use strict';

module.exports = (sequelize, DataTypes) => {
    const swPlanet = sequelize.define(
        'swPlanet',{
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: DataTypes.STRING,
            gravity: DataTypes.FLOAT,
        }, 
        {
            paranoid: true
        }
    );
    return swPlanet;
};
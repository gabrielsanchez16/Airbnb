const {DataTypes} = require('sequelize')

const {database} = require('../utils/dataBase')


const Accommodations = database.define('accommodations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guest: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    beds: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bathrooms: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hostId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'host_id'
    },
    score: {
        type:DataTypes.FLOAT,
        allowNull: false
    },
    placesId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'places_id'
    },
    commision: {
        type: DataTypes.FLOAT,
        allowNull: false
    } 

})


module.exports = Accommodations
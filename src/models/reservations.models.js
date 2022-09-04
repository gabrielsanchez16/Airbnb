const {DataTypes} = require('sequelize')


const {database} = require('../utils/dataBase')

const Reservations = database.define('reservations', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull:false,
        field: 'user_id'
    },
    arrival: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    departure: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    accommodationId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accommodation_id'
    },
    adults: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    kids: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    babys: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    pets: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    score:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isFinished: {
        type: DataTypes.BOOLEAN,
        field: 'is_finished'
    },
    isCanceled: {
        type: DataTypes.BOOLEAN,
        field: 'is_canceled'
    }
})



module.exports = Reservations
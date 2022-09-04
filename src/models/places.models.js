const {DataTypes} = require('sequelize')

const {database} = require('../utils/dataBase')


const Places = database.define('places', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    continent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at'
    }
})


module.exports = Places
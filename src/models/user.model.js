const {DataTypes} = require("sequelize")


const {database} = require('../utils/dataBase')

/*

"first_name": "alejandro",
    "last_name": "sanchez",
    "email": "gabriel@gmail.com",
    "password": "$2b$10$Ab55gIlT3Lm3xA2kVRczCOYujRTny2SziPkQW.r083xu3j.tlgXmm",
    "phone": "",
    "birthday_date": "DD/MM/YYYY",
    "rol": "admind",
    "profile_image": "",
    "country": "string",
    "is_active": true,
    "verified": false

*/
const Users = database.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name'

    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name' 
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false
    },
    addres:{
        type: DataTypes.STRING

    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            min: 10,
            max: 10
        }
    },
    birthdayDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field:  'birthday_date'
    },
    role: {
        allowNull: false,
        type: DataTypes.UUID,
    },
    profileImg: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'profile_img'
    },
    dni: {
        type: DataTypes.STRING
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
    verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
        
    },
    updateAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'update_at'
    }

})


module.exports = Users
const Users = require('./user.model')
const Roles = require('./roles.model')
const UsersImg = require('./users.img.models')
const Reservations = require('./reservations.models')
const Accommodations = require('./accommodations.models')

const initModels = () => {
    Users.hasOne(Roles)
    Roles.belongsToMany(Users)



    //belongsTo
    //belongsToMany
    //hasOne
    //hasMany
}


module.exports = initModels
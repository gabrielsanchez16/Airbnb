const Users = require('./user.model')
const Roles = require('./roles.model')
const UsersImg = require('./users.img.models')
const Reservations = require('./reservations.models')
const Accommodations = require('./accommodations.models')
const AccommodationsImage = require('./accommodation.img.models')
const Places = require('./places.models')


const initModels = () => {
    Users.hasOne(Roles)
    Roles.belongsToMany(Users)

    Users.hasOne(UsersImg)
    UsersImg.belongsToMany(Users)

    Users.belongsToMany(Accommodations, {through:Reservations})
    Accommodations.belongsToMany(Users, {through: Reservations})

    Accommodations.hasOne(Places)
    Places.belongsToMany(Accommodations)

    Accommodations.hasOne(AccommodationsImage)
    AccommodationsImage.belongsToMany(Accommodations)



    //belongsTo
    //belongsToMany
    //hasOne
    //hasMany
}


module.exports = initModels
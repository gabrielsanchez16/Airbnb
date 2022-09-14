const router = require('express').Router()
const reservationsServices = require('./reservations.http')


router.route('/')
    .get(reservationsServices.getAll)


exports.router = router
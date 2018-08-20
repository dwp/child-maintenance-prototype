const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const alphaPrototypeV1Routes = require('./routes/alpha-prototype-1');
router.use('/alpha-prototype-1', alphaPrototypeV1Routes)


module.exports = router

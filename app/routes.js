const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const alphaPrototypeV1Routes = require('./routes/alpha-prototype-1');
router.use('/alpha-prototype-1', alphaPrototypeV1Routes)

const alphaPrototypeV2Routes = require('./routes/alpha-prototype-2');
router.use('/alpha-prototype-2', alphaPrototypeV2Routes)

module.exports = router

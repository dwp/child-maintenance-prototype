const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const alphaPrototypeV1Routes = require('./routes/alpha-prototype-1');
router.use('/alpha-prototype-1', alphaPrototypeV1Routes)

const alphaPrototypeV2Routes = require('./routes/alpha-prototype-2');
router.use('/alpha-prototype-2', alphaPrototypeV2Routes)

const alphaPrototypeV3Routes = require('./routes/alpha-prototype-3');
router.use('/alpha-prototype-3', alphaPrototypeV3Routes)

const alphaPrototypeV4Routes = require('./routes/alpha-prototype-4');
router.use('/alpha-prototype-4', alphaPrototypeV4Routes)


const alphaPrototypeV5Routes = require('./routes/alpha-prototype-5');
router.use('/alpha-prototype-5', alphaPrototypeV5Routes)

module.exports = router

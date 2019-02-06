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


const alphaPrototypeV6Routes = require('./routes/alpha-prototype-6');
router.use('/alpha-prototype-6', alphaPrototypeV6Routes)

const experimentalRoutes = require('./routes/experimental');
router.use('/experimental', experimentalRoutes)

const v5Routes = require('./routes/v5');
router.use('/v5', v5Routes)

const v6Routes = require('./routes/v6');
router.use('/v6', v6Routes)


const v7Routes = require('./routes/v7');
router.use('/v7', v7Routes)

const calc2Routes = require('./routes/calc2');
router.use('/calc2', calc2Routes)

const v8Routes = require('./routes/v8');
router.use('/v8', v8Routes)

const v9Routes = require('./routes/v9');
router.use('/v9', v9Routes)

const v10Routes = require('./routes/v10');
router.use('/v10', v10Routes)

const v11Routes = require('./routes/v11');
router.use('/v11', v11Routes)

const v12Routes = require('./routes/v12');
router.use('/v12', v12Routes)

const v13Routes = require('./routes/v13');
router.use('/v13', v13Routes)
module.exports = router

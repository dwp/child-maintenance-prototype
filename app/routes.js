const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

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

const v14Routes = require('./routes/v14');
router.use('/v14', v14Routes)

const v15Routes = require('./routes/v15');
router.use('/v15', v15Routes)

const v16Routes = require('./routes/v16');
router.use('/v16', v16Routes)

const v17Routes = require('./routes/v17');
router.use('/v17', v17Routes)

const v17aRoutes = require('./routes/v17a');
router.use('/v17a', v17aRoutes)

const v17bRoutes = require('./routes/v17b');
router.use('/v17b', v17Routes)

const v17cRoutes = require('./routes/v17c');
router.use('/v17c', v17cRoutes)

const v17dRoutes = require('./routes/v17d');
router.use('/v17d', v17dRoutes)

const v18Routes = require('./routes/v18');
router.use('/v18', v18Routes)

const v19Routes = require('./routes/v19');
router.use('/v19', v19Routes)

const v20Routes = require('./routes/v20');
router.use('/v20/live-prototype/single', v20Routes)

const testRoutes = require('./routes/test');
router.use('/test', testRoutes)


module.exports = router

const Router = require('koa-router');
const router = new Router();

require('./default')(router);
require('./getById')(router);
require('./allGet')(router);
require('./add')(router);
require('./update')(router);
require('./searchByTitle')(router);
require('./searchByCoordinates')(router);

module.exports = router;
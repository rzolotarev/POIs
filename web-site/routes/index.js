const Router = require('koa-router');
const router = new Router();

require('./default')(router);
require('./add')(router);

module.exports = router;
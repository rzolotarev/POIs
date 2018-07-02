const type = 'Poi';
const mapping = require('../mappings');

module.exports = (router) => {
    router.get('/api/poi', async (ctx) => {

      var result = await mapping[type].find();
      ctx.body = result;        
      ctx.set('Content-Type', `application/json`);             
    });
}
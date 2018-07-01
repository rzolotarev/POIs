const type = 'Poi';
const mapping = require('../mappings');


module.exports = (router) => {
    router.get('/api/poi/:id', async (ctx) => {        
        var result = await mapping[type].findById(ctx.params.id);
        ctx.body = result;        
    });
}
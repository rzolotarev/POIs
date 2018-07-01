const mapping = require('../mappings');

module.exports = (router) => {
    router.get('/api/poi/:type/:title', async (ctx) => {
        model = mapping[ctx.params.type];        

        var regexp = new RegExp(`^${ctx.params.title}`);                
        var result = await model.find({title: regexp });
        ctx.body = result;
    });
}
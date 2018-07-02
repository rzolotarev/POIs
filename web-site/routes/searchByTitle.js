const mapping = require('../mappings');

module.exports = (router) => {
    router.get('/api/filterByTitle/:type/:title?', async (ctx) => {
        model = mapping[ctx.params.type];     

        if(!ctx.params.title){
            ctx.body = await model.find();            
        } else {
            var regexp = new RegExp(`^${ctx.params.title}`);                
            var result = await model.find({title: regexp });
            ctx.body = result;
        }
        ctx.set('Content-Type', `application/json`);             
    });
}
const mapping = require('../mappings');

module.exports = (router) => {
    router.get('/api/poi/:type/:longitude1/:lattitude1/:longitude2/:lattitude2', async (ctx) => {
        model = mapping[ctx.params.type];
        var result = await model.find({ $and: [ {type: ctx.params.type }, 
            { longitude: {$gte: ctx.params.longitude1} }, 
            { lattitude: {$gte: ctx.params.lattitude1} },
            { longitude: {$lte: ctx.params.longitude2} }, 
            { lattitude: {$lte: ctx.params.lattitude2} },
        ]});

        ctx.body = result;
        ctx.set('Content-Type', `application/json`);             
    })
}
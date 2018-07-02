var mapping = require('../mappings');

module.exports = (router) => {
    router.put('/api/poi/:id', async (ctx) => {
        var type = ctx.request.body.type;                

        if(!type)
          ctx.throw(`Type ${type} of object is not defined`);
                  
        ConcreteModel = mapping[type];                
        if(!ConcreteModel)
          ctx.throw("There is no an appropriate mapping");

        
        var result = await ConcreteModel.findOneAndUpdate({_id: ctx.params.id}, ctx.request.body);        
        ctx.body = ctx.request.body;
        ctx.set('Content-Type', `application/json`);             
    });
}
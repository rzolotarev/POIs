const mapping = require('../mappings');

module.exports = (router) => {
    router.post('/api/poi', async (ctx) => {
        var type = ctx.request.body.type;                

        if(!type)
          ctx.throw(`Type ${type} of object is not defined`);
                  
        ConcreteModel = mapping[type];                
        if(!ConcreteModel)
          ctx.throw("There is no an appropriate mapping");

        
        var model = new ConcreteModel( ctx.request.body );

        var result = await model.save();
        ctx.body = ctx.request.body;     
        ctx.set('Content-Type', `application/json`);             
    });
}
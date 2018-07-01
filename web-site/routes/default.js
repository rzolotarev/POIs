const send = require('koa-send');
const mapping = require('../mappings');
const path = require('path');

module.exports = (router) => {
    router.get('/', async (ctx) => {  
        ctx.set('Content-Type', `text/html`);      
        await send(ctx, path.join(__dirname,'../../../web-client/dist/web-client/index.html'));      
    });
}
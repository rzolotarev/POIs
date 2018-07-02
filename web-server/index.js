const Koa = require("koa");
const serve = require('koa-static');
const path = require('path');
const router = require('./routes');
const bodyParser = require('koa-bodyparser');
const database = require('./databases');
database.initialize();

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx, next) => {    
    try {        
        ctx.set('Content-Type', `application/json, text/html`);
        await next();
    }    
    catch(err) {
        ctx.status = 500;
        ctx.message = err.message;
    }
});

app.use(serve(path.join(__dirname, '../web-client/dist/web-client')));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log('listening on port 3000!'));


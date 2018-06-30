// console.log('Oh yeah!');

// const express = require('express');
// const database = require('./database');

// const app = express();

// database.initializeMongo();

// app.get('/', (req, res) => {
//     res.send('I love Jesus');
// });

// app.listen(3000, () => console.log('listening on port 3000!'));
// app.get('/testFind', (req, res) => {
//     database.Kitten.find((err, kittens) => {
//         if(err) return res.error(err);
//         console.log(kittens);
//         res.json(kittens);
//     });
// });

const Koa = require("koa");
const router = require('./routes');
const bodyParser = require('koa-bodyparser');
const database = require('./databases');
database.initialize();

const app = new Koa();
app.use(bodyParser());

//error handling
app.use(async (ctx, next) => {    
    try {        
        await next();
    }    
    catch(err) {
        ctx.status = 500;
        ctx.message = err.message;
    }
});

app.use(async (ctx, next) => {        
    await next();    
    ctx.set('Content-Type', `application/json`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log('listening on port 3000!'));


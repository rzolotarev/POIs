
module.exports = (router) => {
    router.get('/', (ctx) => {
        ctx.status = 200;
        ctx.body = [{
            id: 1,
            text: 'Switch to Koa',
            completed: true
          }, {
            id: 2,
            text: 'Hello',
            completed: true
          }, {
            id: 3,
            text: 'Profit',
            completed: true
          }]
        ctx.set('Content-Type', 'application/json')
    });
}
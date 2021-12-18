const koa = require('koa');
const koaRouter = require('koa-router'); // importing Koa-Router

const app = new koa();
const router = new koaRouter();

router.get('index', '/', context => {
  context.body = '<h1>Index Sayfasina Hosgeldiniz</h1>';
});
router.get('/hakkimda', context => {
  context.body = '<h1>Hakkimda Sayfasina Hosgeldiniz</h1>';
});
router.get('/iletisim', context => {
  context.body = '<h1>Iletisim Sayfasina Hosgeldiniz</h1>';
});

app.use(router.routes()).use(router.allowedMethods()); // registering routes to the application

app.listen(3000, () => console.log('Server running at PORT 3000'));

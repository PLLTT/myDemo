const Koa =require('koa');
const app = new Koa();
//第一个中间件
const duration =require("./middleware/koa_duration")
app.use(duration);
//第二个中间件
const koa_header =require("./middleware/koa_header")
app.use(koa_header);
//第三个中间件
const koa_data =require("./middleware/koa_data")
app.use(koa_data);
app.listen(3000)
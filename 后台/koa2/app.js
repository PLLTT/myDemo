/**
 * 1. 创建koa对象
 * 2. 编写相应函数(中间件)
 * ctx: 上下文，web容器,ctx.request ctx.response
 * next: 下一个中间件，下一层中间件是否能够得到执行，取决于next这个函数有没有被调用
 * 中间件的特点
 * 
 */
const Koa =require('koa');
const app = new Koa();
app.use(async(ctx,next)=>{
    //console.log(ctx.request);
    ctx.response.body="hello word";
    console.log("第一个中间件")
    await next()
   
})
app.use(async(ctx,next)=>{
    //console.log(ctx.request);
    console.log("第二个中间件")
    var res = await next();//await是处理promised对象解析成字符串
    console.log(res)
})
app.use((ctx,next)=>{
    //console.log(ctx.request);
    console.log("第三个中间件")
    return "i am m"//return promised对象
})
app.listen(3000);

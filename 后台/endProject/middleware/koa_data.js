// 处理业务逻辑的中间件,读取某个json文件的数据
const path=require("path")//引入内置path模块
const fileUtils = require("../util/file_utils")
module.exports =async (ctx,next)=>{
    //根据url 获取不同的文件数据
    const url =ctx.request.url 
    const filePath=url.replace("/api","")//
       //ctx.response.body=filePath
    const filePath1='../data' + filePath + '.json'
    const filePath2=path.join(__dirname,filePath1);
    try {
        const ret = await fileUtils.getFileJsonData(filePath2);
        ctx.response.body=ret
    } catch (error) {
        const errorMsg={
            message:"读取失败",
            status:404
        }
        ctx.response.body=errorMsg
    }
    await next();
}

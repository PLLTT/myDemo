//读取工具
const fs = require('fs')
module.exports.getFileJsonData = filePaht => {
    console.log(filePaht)
    // 根据文件的路径, 读取文件的内容
    return new Promise((resolve, reject) => {
        fs.readFile(filePaht, 'utf-8', (err, data) => {
            if (err) {
                // 读取文件失败
                reject(err)
                console.log("读取文件失败")
            } else {
                // 读取文件成功
                resolve(data)
                console.log("读取文件成功")
            }
        })
    })
}
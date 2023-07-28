// const {a,b} = require('./module')
// console.log(a,b)

const http = require('http')
const fs = require('fs').promises

const server = http.createServer(async function(req,res){
    // res.writeHead(200)
    // res.write("<h1>Hello WOrld</h1>")
    // res.end("<p>End</p>")
    try{
        const data = await fs.readFile('./5_httpp.html')
        res.writeHead(200)
        res.end(data)
    }catch(err){
        console.error(err)
        res.writeHead(404)
        res.end(err.message)
    }
})

server.listen(8000,function(){
    console.log('8000번 포트로 서버 실행')
})
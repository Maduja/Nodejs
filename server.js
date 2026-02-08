
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Request Mode")
    console.log(req.url)
    console.log(req.method)

    //res.setHeader('content-Type','text/plain')
    res.setHeader('content-Type','text/html')
    res.write("<h1>Subscribe to codeio</h1>")
    res.write('<h4>Please do </h4>')
    res.end()
})

server.listen(3000, 'localhost', ()=>{
    console.log("Server is listening")
})

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Request Mode")
})

server.listen(3000, 'localhost', ()=>{
    console.log("Server is listening")
})
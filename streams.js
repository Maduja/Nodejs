const fs = require('fs')

const readStream = fs.createReadStream('./docs/file.txt')
readStream.on('data',(chunck)=>{
    console.log(chunck.toString())
})
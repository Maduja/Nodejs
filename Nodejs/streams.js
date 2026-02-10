const fs = require('fs')

const readStream = fs.createReadStream('./docs/file.txt',{encoding:'utf-8'})
const writeStream = fs.createWriteStream('./docs/newfile.txt')


// readStream.on('data',(chunck)=>{
//     writeStream.write(chunck)
// })

readStream.pipe(writeStream)

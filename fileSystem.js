const fs = require('fs')

fs.mkdir('./docs',(err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("folder created")
})
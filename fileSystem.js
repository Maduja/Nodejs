const file = require('fs')

file.mkdir('./docs',(err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("folder created")
})
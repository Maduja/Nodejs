const file = require("fs");

// if (!file.existsSync("./docs")) {
//   file.mkdir("./docs", (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//     console.log("folder created");
//   });
// }


// file.writeFile('./docs/file.txt','hi hi hi',(err)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log("file written")
//     }
// })

// file.readFile('./docs/file.txt',(err,data)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(data.toString())
//     }
// })


// if(file.existsSync('./docs/file.txt')){
//     file.unlink('./docs/file.txt',(err)=>{
//         if(err){
//             console.log(err.message)
//         }else{
//             console.log('file deleted')
//         }
//     })
// }

file.rmdir('./docs',(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log("folder deleted")
    }
})
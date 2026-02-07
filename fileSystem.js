const file = require("fs");

if (!file.existsSync("./docs")) {
  file.mkdir("./docs", (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("folder created");
  });
}


file.writeFile('./docs/file.txt','hi hi hi',(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log("file written")
    }
})

file.readFile('./docs/file.txt',(err,data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data.toString())
    }
})
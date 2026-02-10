

// Global Object
//console.log(global)

setTimeout(()=>{
    console.log("this is a timeout function")
    clearInterval(incfun)
},5000)

const incfun = setInterval(()=>{
    console.log("intervel")
},1000)


console.log(__dirname)
console.log(__filename)
const exp = require('express')
const morgan = require('morgan')
const app = exp()

app.listen(3000)

//middleware
// app.use((req,res,next)=>{
//     console.log("Request recieved")
//     console.log(req.host)
//     console.log(req.path)
//     next()
// })

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    //res.status(200).send('<h1>Codeio</h1>')
    res.sendFile('./docs/index.html',{root:__dirname})
})

app.get('/join',(req,res)=>{
    
    res.sendFile('./docs/join.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
    
    res.sendFile('./docs/about.html',{root:__dirname})
})

app.get('/joinus',(req,res)=>{
    res.redirect('/join')
})

app.use((req,res)=>{
    res.sendFile('./docs.notFound.html',{root:__dirname})
})


import express from "express"

const app = express()

const PORT = 3000

const users =[
    {id:1, user_name:"goms"},
    {id:2, user_name:"madu"},
    {id:3, user_name:"siva"},
    {id:4, user_name:"kamal"},
    {id:5, user_name:"hasini"},
]

app.get('/',(req,res)=>{
    res.send({msg:"Root"})
})

app.get('/api/users',(req,res)=>{
    res.send(users)
})

app.get("/api/users/:id",(req,res)=>{
    //console.log(req.params)
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(404).send({msg:"invalid"})
    }
    const user = users.find((user)=>user.id === id)
    if(user){
        return res.send(user)
    }
    return res.status(404).send({msg:"user not found"})
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})
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

    const {query:{filter,value}}=req
    console.log(filter,value)
    if(filter&&value){
        return res.send(users.filter(((user)=>user[filter].toLowerCase().includes(value))))
    }
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

app.use(express.json())

app.post("/api/users",(req,res)=>{
    console.log(req.body)
    const {body} = req
    const newUser = {id: users[users.length-1].id+1,...body}
    users.push(newUser)
    return res.status(201).send(newUser)
})

app.put("/api/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(404).send({msg:"invalid"})
    }
    const userIndex = users.findIndex((user)=>user.id === id)
    if(userIndex === -1){
        return res.status(404).send({msg:"user not found"})
    }
    const {body} = req
    users[userIndex] = {id: id, ...body}
    return res.status(200).send({msg: "user updated"})
    
})

app.patch("/api/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(404).send({msg:"invalid"})
    }
    const userIndex = users.findIndex((user)=>user.id === id)
    if(userIndex === -1){
        return res.status(404).send({msg:"user not found"})
    }
    const {body} = req
    users[userIndex] = {...users[userIndex], ...body}
    return res.sendStatus(200)
})

app.delete("/api/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(404).send({msg:"invalid"})
    }
    const userIndex = users.findIndex((user)=>user.id === id)
    if(userIndex === -1){
        return res.status(404).send({msg:"user not found"})
    }
    users.splice(userIndex, 1)
    res.sendStatus(200)
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})


//localhost:3000/users?filter=user_name&value=go
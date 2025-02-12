const express = require('express')

const app = express()

app.use(express.json())

let users = [
    {id : 1, name : "Pavani", age : 21},
    {id : 2, name : "Mydhili", age : 20},
    {id : 3, name : "Srija", age : 21},
    {id : 4, name : "Akhila", age : 21}
]

//get method
app.get('/hello', (req,res) =>{
    res.json(users)
}) 

// get by id
app.get('/hello/:id',(req,res) =>{
    const user = users.find(u => u.id === parseInt(req.params.id))
    if(!user) return res.json({message : "user not found"})
    res.json(user)
})

// post
app.post('/hello/post' , (req,res) =>{
    const newUser = { id : users.length + 1, name : req.body.name}
    users.push(newUser)
    res.json(newUser)
})

// put
app.put('/hello/:id',(req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if(!user) return res.json({message: "user not found"})
    user.name = req.body.name
    res.json(user)
})

// delete
app.delete('/hello', (req,res) => {
    users = users.find(u => u.id !== parseInt(req.params.id))
    res.json({message: "user deleted successfully"})
})
app.listen(8080,()=>{
    console.log("Server is running 8080 port")
})
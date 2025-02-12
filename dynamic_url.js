const express = require('express')

const app = express()

app.get('/hi',(req,res) =>{
    const id = req.query.id
    res.send("welcome back" + id)
})

app.get('/hi/:id',function(req,res){
    const id = req.params.id
    res.send("hi Pavani " + id)
})

app.listen(3000, () =>{
    console.log("server is running")
})
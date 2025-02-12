const express = require('express')

const app = express()

app.use((req,res,next) =>{
    let name = "Pavani"
    if(name == "Pavani"){
        next()
    }
})
app.get('/home',(req,res) => {
    res.send("Hello this is pavani") 
})

app.get('/about',(req,res) =>{
    res.send("I am currently pursuing bachelor of technology")
})

app.get('/description', (req,res) =>{
    res.send("A college student.")
})

app.listen(8080, () => {
    console.log("Server is running")
})
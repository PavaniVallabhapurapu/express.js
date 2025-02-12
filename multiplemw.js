const express = require('express')

const app = express()
const firstHandler = ((req, res, next) =>{
    const name = "Pavani"
    if(name == "Pavani"){
        next()
    }
})

const secondHandler = ((req, res, next) =>{
    const student = true
    if(student == false){
        next()
    }
})

const thirdHandler = ((req, res, next) =>{
    const college = "Vishnu"
    if(college == "Vishnu"){
        next()
    }
})


app.get('/home',firstHandler, (req,res) => {
    res.send("I am a college student")
})

app.get('/about',secondHandler,(req,res)=>{
    res.send("My name is Pavani and i'm pursuing b.tech in shri vishnu engineering college for women")
})

app.get('/college',thirdHandler, (req,res) => {
    res.send("Shri vishnu engineering college for women, Bhimavaram, West Godavari, Andhra Pradesh")
})

app.listen(8080, () =>{
    console.log("Server is running")
})